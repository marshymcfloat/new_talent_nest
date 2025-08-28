"use server";

import { prisma } from "@/lib/prisma";
import { createApplicationSchema } from "../zod schemas/applicationSchema";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { put } from "@vercel/blob";
export const submitApplication = async (formData: FormData) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return { error: "You must be logged in to apply." };
    }

    const userId = session.user.id;
    const jobId = formData.get("jobId") as string;
    const resumeFile = formData.get("resume") as File;
    const answersString = formData.get("answers") as string;

    if (!jobId || !resumeFile || !answersString) {
      return { error: "Missing form data" };
    }

    const job = await prisma.job.findUnique({
      where: { id: jobId },
      select: { employerQuestions: true, title: true },
    });

    if (!job) {
      return { error: "Job not found" };
    }

    const validationResult = createApplicationSchema(
      job.employerQuestions
    ).safeParse({
      resume: resumeFile,
      answers: JSON.parse(answersString),
    });

    if (!validationResult.success) {
      console.error(
        "Server side validation failed",
        validationResult.error.flatten()
      );
      return { error: "Invalid data provided. Please check your answers." };
    }

    const { answers: validatedAnswers, resume } = validationResult.data;
    const uniqueFilename = `resumes/${userId}-${Date.now()}-${resume.name.replace(/\s+/g, "_")}`;

    console.log(resume);
    const blob = await put(uniqueFilename, resume, {
      access: "public",
    });

    await prisma.$transaction(async (tx) => {
      const newResume = await tx.resume.create({
        data: {
          title: resume.name,
          url: blob.url,
          isPrimary: false,
          userId: userId,
        },
      });

      const newApplication = await tx.jobApplication.create({
        data: {
          jobId,
          resumeId: newResume.id,
          userId: userId,
        },
      });

      const answerPromises = Object.entries(validatedAnswers).map(
        ([questionId, text]) => {
          return tx.answer.create({
            data: {
              text: text as string,
              questionId,
              jobApplicationId: newApplication.id,
            },
          });
        }
      );
      await Promise.all(answerPromises);
    });

    return { success: "Application submitted successfully!" };
  } catch (err) {
    console.error("An error occurred in submitApplication:", err);
    return { error: "An unexpected error occurred. Please try again." };
  }
};
