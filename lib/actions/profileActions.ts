"use server";

import { z } from "zod";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { prisma } from "../prisma";
import { addCareerSchema } from "../zod schemas/profileSchema";
import { revalidatePath } from "next/cache";

export const AddUserCareerHistory = async (formData: FormData) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      throw new Error("You must be logged in.");
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
