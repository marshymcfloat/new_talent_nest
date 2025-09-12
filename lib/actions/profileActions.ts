"use server";

import { z } from "zod";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { prisma } from "../prisma";
import {
  addCareerSchema,
  addEducationSchema,
  addResumeSchema,
  summarySchema,
} from "../zod schemas/profileSchema";
import { revalidatePath } from "next/cache";
import { Language, Prisma } from "@prisma/client";
import { put } from "@vercel/blob";

const monthNameToNumber: { [key: string]: number } = {
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Aug: 8,
  Sep: 9,
  Oct: 10,
  Nov: 11,
  Dec: 12,
};

type AddEducationValue = z.infer<typeof addEducationSchema>;

const handleError = (
  err: unknown,
  functionName: string = "An action"
): { error: string } => {
  console.error(`Error in ${functionName}:`, err);
  if (err instanceof z.ZodError) {
    const fieldErrors = err.flatten().fieldErrors;
    const formErrors = err.flatten().formErrors;

    if (formErrors.length > 0) {
      return { error: formErrors.join(", ") };
    }
    if (Object.keys(fieldErrors).length > 0) {
      const firstFieldKey = Object.keys(fieldErrors)[0];
      const specificErrors =
        fieldErrors[firstFieldKey as keyof typeof fieldErrors];
      return { error: specificErrors?.[0] || "Invalid input." };
    }
  }
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2025") {
      return { error: "Record not found or you don't have permission." };
    }
    return { error: `Database error: ${err.message}` };
  }
  if (err instanceof Error) {
    return { error: err.message };
  }
  return { error: "An unexpected error occurred." };
};

const getSessionUserId = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    throw new Error("You must be logged in to perform this action.");
  }
  return session.user.id;
};

export const addUserSummary = async (formData: FormData) => {
  try {
    const userId = await getSessionUserId();
    const rawData = { summary: formData.get("summary") };
    const validationResult = summarySchema.safeParse(rawData);

    if (!validationResult.success) {
      throw validationResult.error;
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { summary: validationResult.data.summary },
    });

    revalidatePath("/profile");
    return { success: true, data: updatedUser };
  } catch (err) {
    return handleError(err, "addUserSummary");
  }
};

export const AddUserCareerHistory = async (formData: FormData) => {
  try {
    const userId = await getSessionUserId();
    const rawData = {
      title: formData.get("title"),
      company: formData.get("company"),
      dateStarted: formData.get("dateStarted"),
      dateEnded: formData.get("dateEnded"),
      description: formData.get("description"),
    };

    const validationResult = addCareerSchema.safeParse(rawData);
    if (!validationResult.success) {
      throw validationResult.error;
    }

    const { company, dateStarted, title, dateEnded, description } =
      validationResult.data;

    const newCareer = await prisma.careerHistory.create({
      data: {
        company,
        dateStarted: new Date(dateStarted),
        title,
        dateEnded: dateEnded ? new Date(dateEnded) : null,
        description: description,
        userId: userId,
      },
    });

    revalidatePath("/profile");
    return { success: true, data: newCareer };
  } catch (err) {
    return handleError(err, "AddUserCareerHistory");
  }
};

export const addUserEducation = async (values: AddEducationValue) => {
  try {
    const userId = await getSessionUserId();
    const validationResult = addEducationSchema.safeParse(values);
    if (!validationResult.success) {
      throw validationResult.error;
    }

    const {
      course,
      institution,
      isComplete,
      highlights,
      expectedFinishMonth,
      expectedFinishYear,
      finishedYear,
    } = validationResult.data;

    const finalFinishedYear =
      isComplete && finishedYear ? Number(finishedYear) : null;
    const finalExpectedFinishYear =
      !isComplete && expectedFinishYear ? Number(expectedFinishYear) : null;
    const finalExpectedFinishMonth =
      !isComplete && expectedFinishMonth
        ? monthNameToNumber[expectedFinishMonth]
        : null;

    const dataForPrisma = {
      userId,
      course,
      institution,
      highlight: highlights || null,
      isComplete,
      finishedYear: finalFinishedYear,
      expectedFinishYear: finalExpectedFinishYear,
      expectedFinishMonth: finalExpectedFinishMonth,
    };

    const newEducation = await prisma.education.create({ data: dataForPrisma });

    revalidatePath("/profile");
    return { success: true, data: newEducation };
  } catch (err) {
    return handleError(err, "addUserEducation");
  }
};

export const updateUserLanguages = async (languages: Language[]) => {
  try {
    const userId = await getSessionUserId();

    const languageSchema = z.array(
      z.object({ id: z.number(), name: z.string() })
    );
    const validationResult = languageSchema.safeParse(languages);

    if (!validationResult.success) {
      throw validationResult.error;
    }

    const languagesToConnect = validationResult.data.map((lang) => ({
      id: lang.id,
    }));

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { languages: { set: languagesToConnect } },
      select: { languages: true },
    });

    revalidatePath("/profile");
    return { success: true, data: updatedUser.languages };
  } catch (err) {
    return handleError(err, "updateUserLanguages");
  }
};

export const addUserResume = async (formData: FormData) => {
  try {
    const userId = await getSessionUserId();
    const rawData = {
      name: formData.get("name"),
      resume: formData.get("resume"),
    };
    const validationResult = addResumeSchema.safeParse(rawData);
    if (!validationResult.success) {
      throw validationResult.error;
    }

    const { name, resume } = validationResult.data;

    if (resume instanceof File) {
      const fileName = resume.name || `untitled_resume_${Date.now()}.pdf`;
      const uniqueFilename = `resumes/${userId}-${Date.now()}-${fileName.replace(/\s+/g, "_")}`;
      const blob = await put(uniqueFilename, resume, { access: "public" });

      const newResume = await prisma.resume.create({
        data: {
          title: name || fileName,
          url: blob.url,
          isPrimary: false,
          userId: userId,
        },
      });

      revalidatePath("/profile");
      return { success: true, data: newResume };
    } else {
      throw new Error("Resume file is missing or invalid.");
    }
  } catch (err) {
    return handleError(err, "addUserResume");
  }
};

export const deleteUserCareer = async (id: string) => {
  try {
    const userId = await getSessionUserId();
    const softDeletedCareer = await prisma.careerHistory.update({
      where: { id, userId },
      data: { deletedAt: new Date() },
    });
    revalidatePath("/profile");
    return { success: true, data: softDeletedCareer };
  } catch (err) {
    return handleError(err, "deleteUserCareer");
  }
};

export const updateUserCareerHistory = async ({
  formData,
  id,
}: {
  formData: FormData;
  id: string;
}) => {
  try {
    const userId = await getSessionUserId();
    const rawData = {
      title: formData.get("title"),
      company: formData.get("company"),
      dateStarted: formData.get("dateStarted"),
      dateEnded: formData.get("dateEnded"),
      description: formData.get("description"),
    };
    const validationResult = addCareerSchema.safeParse(rawData);
    if (!validationResult.success) {
      throw validationResult.error;
    }

    const { company, dateStarted, title, dateEnded, description } =
      validationResult.data;

    const updatedCareer = await prisma.careerHistory.update({
      data: {
        title,
        company,
        dateStarted: new Date(dateStarted),
        dateEnded: dateEnded ? new Date(dateEnded) : null,
        description,
      },
      where: { id, userId },
    });

    revalidatePath("/profile");
    return { success: true, data: updatedCareer };
  } catch (err) {
    return handleError(err, "updateUserCareerHistory");
  }
};

export const updateUserEducation = async ({
  values,
  id,
}: {
  values: AddEducationValue;
  id: string;
}) => {
  try {
    const userId = await getSessionUserId();
    const validationResult = addEducationSchema.safeParse(values);
    if (!validationResult.success) {
      throw validationResult.error;
    }

    const {
      course,
      institution,
      isComplete,
      highlights,
      expectedFinishMonth,
      expectedFinishYear,
      finishedYear,
    } = validationResult.data;

    const finalFinishedYear =
      isComplete && finishedYear ? Number(finishedYear) : null;
    const finalExpectedFinishYear =
      !isComplete && expectedFinishYear ? Number(expectedFinishYear) : null;
    const finalExpectedFinishMonth =
      !isComplete && expectedFinishMonth
        ? monthNameToNumber[expectedFinishMonth]
        : null;

    const dataForPrisma = {
      course,
      institution,
      isComplete,
      highlight: highlights || null,
      finishedYear: finalFinishedYear,
      expectedFinishYear: finalExpectedFinishYear,
      expectedFinishMonth: finalExpectedFinishMonth,
    };

    const updatedEducation = await prisma.education.update({
      where: { id, userId },
      data: dataForPrisma,
    });

    revalidatePath("/profile");
    return { success: true, data: updatedEducation };
  } catch (err) {
    return handleError(err, "updateUserEducation");
  }
};

export const deleteUserEducation = async (id: string) => {
  try {
    const userId = await getSessionUserId();
    const softDeletedEducation = await prisma.education.update({
      where: { id, userId },
      data: { deletedAt: new Date() },
    });
    revalidatePath("/profile");
    return { success: true, data: softDeletedEducation };
  } catch (err) {
    return handleError(err, "deleteUserEducation");
  }
};

export const deleteUserResume = async (id: string) => {
  try {
    const userId = await getSessionUserId();
    const applicationExists = await prisma.jobApplication.findFirst({
      where: { resumeId: id, User: { id: userId } },
    });

    if (applicationExists) {
      throw new Error(
        "Cannot delete this resume as it is currently linked to one or more job applications. Please delete the applications first."
      );
    }

    const softDeletedResume = await prisma.resume.update({
      where: { id, userId },
      data: { deletedAt: new Date() },
    });

    revalidatePath("/profile");
    return { success: true, data: softDeletedResume };
  } catch (err) {
    return handleError(err, "deleteUserResume");
  }
};
