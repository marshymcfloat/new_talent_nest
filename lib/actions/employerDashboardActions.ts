"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { createValidatedAuthedAction } from "../sessionUtils";
import { createQuestionSchema } from "../zod schemas/employerDashboardSchema";
import { prisma } from "@/lib/prisma";

export const getCompanyQuestions = createValidatedAuthedAction(
  z.void(), // No input needed for this action
  async (_, session) => {
    try {
      const { user } = session;

      const member = await prisma.companyMember.findFirst({
        where: { userId: user.id },
        select: { companyId: true },
      });

      if (!member) {
        return { error: "User is not associated with a company." };
      }

      const questions = await prisma.companyQuestion.findMany({
        where: {
          companyId: member.companyId,
          isArchived: false, // Good practice to hide archived questions
        },
        orderBy: {
          text: "asc", // Order them alphabetically
        },
      });

      return { success: true, data: questions };
    } catch (error) {
      console.error("Failed to fetch company questions:", error);
      return {
        error: "An unexpected error occurred while fetching questions.",
      };
    }
  }
);

export const createEmployerQuestion = createValidatedAuthedAction(
  createQuestionSchema,
  async (validatedData, session) => {
    try {
      const { user } = session;

      const { text, type, options } = validatedData;
      const member = await prisma.companyMember.findFirst({
        where: {
          userId: user.id,
        },
      });

      if (!member) {
        return { error: "You are not a member of any company." };
      }

      const newQuestions = await prisma.companyQuestion.create({
        data: {
          text,
          type,
          options,
          companyId: member.companyId,
        },
      });

      if (!newQuestions) {
        throw new Error("Failed to create new question");
      }

      revalidatePath("/:id/dashboard");
      return { success: true, message: "created question successfullly" };
    } catch (err) {
      console.error(err);
      return {
        error: "An unexpected error occurred while creating the question.",
      };
    }
  }
);
