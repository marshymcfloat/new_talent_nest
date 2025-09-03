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
import { Language } from "@prisma/client";
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
type UpdateCareerSchema = z.infer<typeof addCareerSchema>;

export const addUserSummary = async (formData: FormData) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user.id) throw new Error("You must log in first");

    const rawData = {
      summary: formData.get("summary"),
    };

    const validationResult = await summarySchema.safeParse(rawData);

    if (!validationResult.success) {
      throw new Error(
        validationResult.error.flatten().fieldErrors.summary?.[0] ||
          "Invalid input"
      );
    }

    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: { summary: validationResult.data.summary },
    });

    revalidatePath("/profile");
    return updatedUser;
  } catch (err) {
    console.error(err);
    if (err instanceof Error) {
      return { error: err.message };
    }
    return { error: "Unexpected error occured" };
  }
};

export const AddUserCareerHistory = async (formData: FormData) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      throw new Error("You must log in.");
    }

    const rawData = {
      title: formData.get("title"),
      company: formData.get("company"),
      dateStarted: formData.get("dateStarted"),
      dateEnded: formData.get("dateEnded"),
      description: formData.get("description"),
    };

    const serverSchema = z.object({
      title: addCareerSchema.shape.title,
      company: addCareerSchema.shape.company,

      dateStarted: z
        .preprocess(
          (val) => (val ? new Date(val as string) : undefined),
          z.date().optional()
        )
        .transform((val, ctx): Date => {
          if (!val) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "Start date is required.",
            });
            return z.NEVER;
          }
          return val;
        }),

      dateEnded: z.preprocess(
        (val) => (val ? new Date(val as string) : undefined),
        z.date().optional().nullable()
      ),
      description: z.string().optional().nullable(),
    });

    const validationResult = serverSchema.safeParse(rawData);

    if (!validationResult.success) {
      console.error(
        "Server validation failed:",
        validationResult.error.flatten()
      );
      throw new Error("Invalid data provided. Please check your input.");
    }

    const { company, dateStarted, title, dateEnded, description } =
      validationResult.data;

    const newCareer = await prisma.careerHistory.create({
      data: {
        company,
        dateStarted,
        title,
        dateEnded: dateEnded,
        description: description,
        userId: session.user.id,
      },
    });

    revalidatePath("/profile");
    return { success: true, data: newCareer };
  } catch (err) {
    console.error("Error in AddUserCareerHistory action:", err);
    if (err instanceof Error) {
      return { success: false, error: err.message };
    }
    return { success: false, error: "An unexpected error occurred." };
  }
};

export const addUserEducation = async (values: AddEducationValue) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      throw new Error("You must be logged in to add education history.");
    }
    const userId = session.user.id;

    const validationResult = addEducationSchema.safeParse(values);
    if (!validationResult.success) {
      console.error(validationResult.error.flatten());
      throw new Error("Invalid input data.");
    }

    let {
      course,
      institution,
      isComplete,
      expectedFinishMonth,
      expectedFinishYear,
      finishedYear,
      highlights,
    } = validationResult.data;

    // --- FIX STARTS HERE ---
    // If the qualification is complete, we must nullify the expected finish dates.
    if (isComplete) {
      expectedFinishMonth = undefined; // or "" depending on your zod schema, undefined is safer
      expectedFinishYear = undefined; // or ""
    } else {
      // If it's not complete, we must nullify the finished date.
      finishedYear = undefined; // or ""
    }
    // --- FIX ENDS HERE ---

    const dataForPrisma = {
      userId,
      course,
      institution,
      highlight: highlights || null,
      isComplete,
      finishedYear: finishedYear ? parseInt(finishedYear, 10) : null,
      expectedFinishYear: expectedFinishYear
        ? parseInt(expectedFinishYear, 10)
        : null,
      expectedFinishMonth: expectedFinishMonth
        ? monthNameToNumber[expectedFinishMonth]
        : null,
    };

    const newEducation = await prisma.education.create({
      data: dataForPrisma,
    });

    revalidatePath("/profile");
    return { success: true, data: newEducation };
  } catch (err) {
    if (err instanceof Error) {
      return { error: err.message };
    }
    return { error: "An unexpected error occurred." };
  }
};
export const updateUserLanguages = async (languages: Language[]) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      throw new Error("You must be logged in to update languages.");
    }
    const userId = session.user.id;

    if (!Array.isArray(languages)) {
      throw new Error("Invalid input: Expected an array of languages.");
    }

    const languagesToConnect = languages.map((lang) => ({ id: lang.id }));

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        languages: {
          set: languagesToConnect,
        },
      },
      include: {
        languages: true,
      },
    });

    revalidatePath("/profile");
    return { success: true, data: updatedUser.languages };
  } catch (err) {
    if (err instanceof Error) {
      console.error("Error in updateUserLanguages action:", err);
      return { error: err.message };
    }
    return { error: "An unexpected error occurred." };
  }
};

export const addUserResume = async (value: FormData) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      throw new Error("You must log in first");
    }

    const rawData = {
      name: value.get("name"),
      resume: value.get("resume"),
    };

    const validationResult = addResumeSchema.safeParse(rawData);

    console.log(validationResult);
    if (!validationResult.success) {
      throw new Error("Invalid inputs");
    }

    const { name, resume } = validationResult.data;

    if (resume instanceof File) {
      const uniqueFilename = `resumes/${session.user.id}-${Date.now()}-${resume?.name.replace(/\s+/g, "_")}`;

      const blob = await put(uniqueFilename, resume, {
        access: "public",
      });

      const newResume = await prisma.resume.create({
        data: {
          title: name ?? resume?.name,
          url: blob.url,
          isPrimary: false,
          userId: session.user.id,
        },
      });

      revalidatePath("/profile");
      return { success: true, data: newResume };
    }
  } catch (err) {
    if (err instanceof Error) {
      return { error: err.message };
    }
    return { error: "There is an unexpected error occured" };
  }
};

export const deleteUserCareer = async (id: string) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      throw new Error("You must log in first");
    }

    const deletedCareer = await prisma.careerHistory.delete({ where: { id } });

    if (!deletedCareer) {
      throw new Error("Deleting career unsuccessful.");
    }

    revalidatePath("/profile");
    return { success: true, data: deletedCareer };
  } catch (err) {
    if (err instanceof Error) {
      return { error: err.message };
    }
    return { error: "An unexpected error occured" };
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
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      throw new Error("You must log in first");
    }

    const rawData = {
      title: formData.get("title"),
      company: formData.get("company"),
      dateStarted: formData.get("dateStarted"),
      dateEnded: formData.get("dateEnded"),
      description: formData.get("description"),
    };

    const serverSchema = z.object({
      title: addCareerSchema.shape.title,
      company: addCareerSchema.shape.company,

      dateStarted: z
        .preprocess(
          (val) => (val ? new Date(val as string) : undefined),
          z.date().optional()
        )
        .transform((val, ctx): Date => {
          if (!val) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "Start date is required.",
            });
            return z.NEVER;
          }
          return val;
        }),

      dateEnded: z.preprocess(
        (val) => (val ? new Date(val as string) : undefined),
        z.date().optional().nullable()
      ),
      description: z.string().optional().nullable(),
    });

    const validationResult = serverSchema.safeParse(rawData);

    if (!validationResult.success) {
      throw new Error("Invalid inputs");
    }
    const { company, dateStarted, title, dateEnded, description } =
      validationResult.data;

    const updatedCareer = await prisma.careerHistory.update({
      data: {
        title,
        company,
        dateEnded,
        dateStarted,
        description,
      },
      where: { id, userId: session.user.id },
    });

    revalidatePath("/profile");
    return { success: true, data: updatedCareer };
  } catch (err) {
    if (err instanceof Error) {
      return { error: err.message };
    }
    return { error: "an unexpected error occured" };
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
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      throw new Error("You must be logged in to update education history.");
    }
    const userId = session.user.id;

    const validationResult = addEducationSchema.safeParse(values);
    if (!validationResult.success) {
      console.error("Validation Error:", validationResult.error.flatten());
      throw new Error("Invalid input data.");
    }

    let {
      course,
      institution,
      isComplete,
      expectedFinishMonth,
      expectedFinishYear,
      finishedYear,
      highlights,
    } = validationResult.data;

    if (isComplete) {
      expectedFinishMonth = undefined;
      expectedFinishYear = undefined;
    } else {
      finishedYear = undefined;
    }

    const dataForPrisma = {
      course,
      institution,
      isComplete,
      highlight: highlights || null,
      finishedYear: finishedYear ? parseInt(finishedYear, 10) : null,
      expectedFinishYear: expectedFinishYear
        ? parseInt(expectedFinishYear, 10)
        : null,
      expectedFinishMonth: expectedFinishMonth
        ? monthNameToNumber[expectedFinishMonth]
        : null,
    };

    const updatedEducation = await prisma.education.update({
      where: {
        id: id,
        userId: userId,
      },
      data: dataForPrisma,
    });

    revalidatePath("/profile");
    return { success: true, data: updatedEducation };
  } catch (err) {
    if (err instanceof Error) {
      if ((err as any).code === "P2025") {
        return {
          error: "Record to update not found or you don't have permission.",
        };
      }
      return { error: err.message };
    }
    return { error: "An unexpected error occurred." };
  }
};

export const deleteUserEducation = async (id: string) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      throw new Error("You must log in first");
    }

    const deletedEducation = await prisma.education.delete({
      where: { id, userId: session.user.id },
    });

    if (!deletedEducation) {
      throw new Error(
        "There is an error occured while attempting to delete education"
      );
    }

    revalidatePath("/profile");
    return { success: true, data: deletedEducation };
  } catch (err) {
    if (err instanceof Error) {
      return { error: err.message };
    }
    return { error: "an unexpected error occured" };
  }
};
