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
} from "../zod schemas/profileSchema"; // Assuming these schemas are well-defined
import { revalidatePath } from "next/cache";
import { Language, Prisma } from "@prisma/client";
import { put } from "@vercel/blob";

// Helper function to extract and parse form data
function getFormDataValue<T extends z.ZodTypeAny>(
  formData: FormData,
  key: string,
  schema: T
): z.infer<T> | undefined {
  const value = formData.get(key);
  const parsed = schema.safeParse(value);
  return parsed.success ? parsed.data : undefined;
}

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

type AddEducationValue = z.infer<typeof addEducationSchema>; // Keep this type for clarity

// --- Centralized Error Handling Helper ---
// This function helps in creating consistent error responses.
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
      // Asserting the key type to fix TS7053 error
      const specificErrors =
        fieldErrors[firstFieldKey as keyof typeof fieldErrors];
      return { error: specificErrors?.[0] || "Invalid input." };
    }
  }
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2025") {
      return { error: "Record not found or you don't have permission." };
    }
    // You can add more Prisma error codes here if needed
    return { error: `Database error: ${err.message}` };
  }
  if (err instanceof Error) {
    return { error: err.message };
  }
  return { error: "An unexpected error occurred." };
};

// --- Helper for Session Check ---
const getSessionUserId = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    throw new Error("You must be logged in to perform this action.");
  }
  return session.user.id;
};

// --- Refactored Functions ---

export const addUserSummary = async (formData: FormData) => {
  try {
    const userId = await getSessionUserId();

    const rawData = {
      summary: formData.get("summary"),
    };

    const validationResult = summarySchema.safeParse(rawData);

    if (!validationResult.success) {
      throw validationResult.error; // Throw ZodError for consistent handling
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

    // Re-use addCareerSchema directly, assuming it's robust enough
    // and handles date parsing/transformation appropriately.
    // If not, you might need a separate server-side schema or refine the client one.
    // For now, I'll assume addCareerSchema handles date objects or strings that can be converted.
    const validationResult = addCareerSchema.safeParse(rawData);

    if (!validationResult.success) {
      throw validationResult.error;
    }

    const { company, dateStarted, title, dateEnded, description } =
      validationResult.data;

    const newCareer = await prisma.careerHistory.create({
      data: {
        company,
        // Ensure dateStarted and dateEnded are Date objects if they're not already
        // This depends on how addCareerSchema is defined.
        // If addCareerSchema.shape.dateStarted uses z.date(), then it's already a Date object.
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

    let {
      course,
      institution,
      isComplete,
      highlights,
      expectedFinishMonth,
      expectedFinishYear,
      finishedYear,
    } = validationResult.data;

    // Ensure finishedYear and expectedFinishYear are number strings if coming from select/input
    // and then convert to actual numbers for Prisma.
    // If your addEducationSchema already transforms these to numbers, this parseInt is redundant.
    // Assuming schema gives string or number.
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
      highlight: highlights || null, // Ensure highlight is null if empty string
      isComplete,
      finishedYear: finalFinishedYear,
      expectedFinishYear: finalExpectedFinishYear,
      expectedFinishMonth: finalExpectedFinishMonth,
    };

    const newEducation = await prisma.education.create({
      data: dataForPrisma,
    });

    revalidatePath("/profile");
    return { success: true, data: newEducation };
  } catch (err) {
    return handleError(err, "addUserEducation");
  }
};

export const updateUserLanguages = async (languages: Language[]) => {
  try {
    const userId = await getSessionUserId();

    // Basic validation for array type and structure
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
      data: {
        languages: {
          set: languagesToConnect, // Disconnect all existing and connect new ones
        },
      },
      include: {
        languages: true,
      },
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
      // Ensure file name is not empty or null
      const fileName = resume.name || `untitled_resume_${Date.now()}.pdf`; // Fallback name
      const uniqueFilename = `resumes/${userId}-${Date.now()}-${fileName.replace(/\s+/g, "_")}`;

      const blob = await put(uniqueFilename, resume, {
        access: "public",
      });

      const newResume = await prisma.resume.create({
        data: {
          title: name || fileName, // Use provided name or file name as fallback
          url: blob.url,
          isPrimary: false,
          userId: userId,
        },
      });

      revalidatePath("/profile");
      return { success: true, data: newResume };
    } else {
      // This case should ideally be caught by addResumeSchema if 'resume' is required to be a File.
      // If the schema allows 'resume' to be undefined in some cases, handle it explicitly.
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
      where: { id, userId }, // Ensure the user owns the record
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

    // Re-use addCareerSchema as it should have all necessary fields
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
        dateStarted: new Date(dateStarted), // Ensure Date object
        dateEnded: dateEnded ? new Date(dateEnded) : null, // Ensure Date object or null
        description,
      },
      where: { id, userId }, // Ensure the user owns the record
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

    let {
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
      where: { id, userId }, // Ensure the user owns the record
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
      where: { id, userId }, // Ensure the user owns the record
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
      where: { resumeId: id, User: { id: userId } }, // Add userId check here too
    });

    if (applicationExists) {
      throw new Error(
        "Cannot delete this resume as it is currently linked to one or more job applications. Please delete the applications first."
      );
    }

    const softDeletedResume = await prisma.resume.update({
      where: { id, userId }, // Ensure the user owns the record
      data: { deletedAt: new Date() },
    });

    revalidatePath("/profile");
    return { success: true, data: softDeletedResume };
  } catch (err) {
    return handleError(err, "deleteUserResume");
  }
};
