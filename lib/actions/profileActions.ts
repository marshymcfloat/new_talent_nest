"use server";

import { z } from "zod";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { prisma } from "../prisma";
import {
  addCareerSchema,
  addEducationSchema,
  summarySchema,
} from "../zod schemas/profileSchema";
import { revalidatePath } from "next/cache";
import { Language } from "@prisma/client";

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
      ...addCareerSchema.shape,
      dateStarted: z.preprocess(
        (val) => (val ? new Date(val as string) : undefined),
        z.date()
      ),
      dateEnded: z.preprocess(
        (val) => (val ? new Date(val as string) : undefined),
        z.date().optional()
      ),
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
        dateEnded,
        description: description || null,
        userId: session.user.id,
      },
    });

    console.log(newCareer);

    revalidatePath("/profile");
    return { success: true, data: newCareer };
  } catch (err) {
    console.error("Error in AddUserCareerHistory action:", err);
    if (err instanceof Error) {
      return { error: err.message };
    }
    return { error: "An unexpected error occurred." };
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

    const {
      course,
      institution,
      isComplete,
      expectedFinishMonth,
      expectedFinishYear,
      finishedYear,
      highlights,
    } = validationResult.data;

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
