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
    const answersString = formData.get("answers") as string;

    const resumeFile = formData.get("resume") as File | null;
    const resumeId = formData.get("resumeId") as string | null;

    if (!jobId || !answersString) {
      return { error: "Missing required form data." };
    }

    if (!resumeFile && !resumeId) {
      return { error: "A resume must be provided." };
    }

    const job = await prisma.job.findUnique({
      where: { id: jobId },
      select: { employerQuestions: true },
    });

    if (!job) {
      return { error: "Job not found" };
    }

    const validationResult = createApplicationSchema(
      job.employerQuestions
    ).safeParse({
      resume: resumeFile || resumeId,
      answers: JSON.parse(answersString),
    });

    if (!validationResult.success) {
      console.error(
        "Server side validation failed",
        validationResult.error.flatten()
      );
      return { error: "Invalid data provided. Please check your answers." };
    }

    const { answers: validatedAnswers, resume: validatedResume } =
      validationResult.data;
    let finalResumeId: string;

    await prisma.$transaction(async (tx) => {
      if (validatedResume instanceof File) {
        const uniqueFilename = `resumes/${userId}-${Date.now()}-${validatedResume.name.replace(/\s+/g, "_")}`;

        const blob = await put(uniqueFilename, validatedResume, {
          access: "public",
        });

        const newResume = await tx.resume.create({
          data: {
            title: validatedResume.name,
            url: blob.url,
            isPrimary: false,
            userId: userId,
          },
        });
        finalResumeId = newResume.id;
      } else {
        const existingResumeId = validatedResume;

        const resumeOwner = await tx.resume.findFirst({
          where: {
            id: existingResumeId,
            userId: userId,
          },
          select: { id: true },
        });

        if (!resumeOwner) {
          throw new Error(
            "Authorization error: User does not own the selected resume."
          );
        }

        finalResumeId = resumeOwner.id;
      }

      const newApplication = await tx.jobApplication.create({
        data: {
          jobId,
          resumeId: finalResumeId,
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
