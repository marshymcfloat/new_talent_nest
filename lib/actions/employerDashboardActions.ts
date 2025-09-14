"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { createValidatedAuthedAction } from "../sessionUtils";
import {
  createJobSchema,
  createQuestionSchema,
} from "../zod schemas/employerDashboardSchema";
import { prisma } from "@/lib/prisma";
import { formatCapitalizeString } from "../utils";

export const getCompanyQuestions = createValidatedAuthedAction(
  z.void(),
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
          isArchived: false,
        },
        orderBy: {
          text: "asc",
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

export const createNewJob = createValidatedAuthedAction(
  createJobSchema,
  async (validatedData, session) => {
    try {
      const companyMember = await prisma.companyMember.findFirst({
        where: {
          userId: session.user.id,
        },
      });

      if (!companyMember) {
        return { error: "You are not associated with any company." };
      }

      const {
        currency,
        location,
        qualifications,
        responsibilities,
        summary,
        title,
        type,
        benefits,
        maxSalary,
        minSalary,
        payPeriod,
        questions,
        tags,
        jobClass,
      } = validatedData;

      const formattedJobTitle = formatCapitalizeString(title);

      const newJob = await prisma.$transaction(async (tx) => {
        const createdJob = await tx.job.create({
          data: {
            title: formattedJobTitle,
            location,
            jobClass,
            type,
            summary,
            qualifications,
            responsibilities,
            benefits,
            minSalary,
            maxSalary,
            currency,
            payPeriod,
            tags,
            companyId: companyMember.companyId,
          },
        });

        if (questions && questions.length > 0) {
          const questionsToLink = questions.map((q) => ({
            jobId: createdJob.id,
            questionId: q.questionId,
            isRequired: q.isRequired,
          }));

          await tx.questionsOnJobs.createMany({
            data: questionsToLink,
          });
        }

        return createdJob;
      });

      revalidatePath(`/${session.user.id}/dashboard`);
      return { success: true, data: { jobId: newJob.id } };
    } catch (err) {
      console.error("Failed to create new job:", err);
      return { error: "An unexpected error occurred. Please try again." };
    }
  }
);
