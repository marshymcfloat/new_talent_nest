"use server";

import { prisma } from "@/lib/prisma";
import { createApplicationSchema } from "../zod schemas/applicationSchema";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { put } from "@vercel/blob";
import { z } from "zod"; // Import z for ZodError handling

export const submitApplication = async (formData: FormData) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return { error: "You must be logged in to apply." };
    }

    const userId = session.user.id;
    const jobId = formData.get("jobId") as string;
    const answersString = formData.get("answers") as string;
    const resumeFile = formData.get("resume") as File | null; // This will be the File object if uploaded
    const resumeId = formData.get("resumeId") as string | null; // This will be the string ID if selected

    // Basic validation for existence of critical data
    if (!jobId || !answersString) {
      return { error: "Missing required form data (Job ID or answers)." };
    }
    if (!resumeFile && !resumeId) {
      return {
        error: "A resume must be provided (either upload or select existing).",
      };
    }

    // Fetch the job and its associated questions
    const jobWithQuestions = await prisma.job.findUnique({
      where: { id: jobId },
      select: {
        id: true,
        questions: {
          // Select the QuestionsOnJobs relationship
          include: {
            question: true, // Include the actual CompanyQuestion details
          },
          orderBy: { sortOrder: "asc" }, // Optional: order questions if you display them in a specific order
        },
      },
    });

    if (!jobWithQuestions) {
      return { error: "The job you are applying for no longer exists." };
    }

    // Prepare data for schema validation
    const applicationData = {
      jobId: jobId,
      resume: resumeFile || resumeId, // Pass either the File object or the string ID
      answers: answersString ? JSON.parse(answersString) : {},
    };

    // Initialize the schema with the job's questions
    const applicationSchema = createApplicationSchema(
      jobWithQuestions.questions
    );

    const validationResult = applicationSchema.safeParse(applicationData);

    if (!validationResult.success) {
      console.error(
        "Server-side validation failed:",
        validationResult.error.flatten()
      );
      // Construct a more user-friendly error message from Zod errors
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      const formErrors = validationResult.error.flatten().formErrors;

      let errorMessage = "Invalid data provided. Please check your answers.";
      if (formErrors.length > 0) {
        errorMessage = formErrors.join(", ");
      } else if (Object.keys(fieldErrors).length > 0) {
        // Find the first error message and return it
        const firstFieldKey = Object.keys(fieldErrors)[0];
        // Assert that firstFieldKey is a key of fieldErrors
        const specificErrors =
          fieldErrors[firstFieldKey as keyof typeof fieldErrors];
        errorMessage = specificErrors?.[0] || errorMessage;
      }
      return { error: errorMessage };
    }

    const { answers: validatedAnswers, resume: validatedResume } =
      validationResult.data;
    let finalResumeId: string;

    await prisma.$transaction(async (tx) => {
      if (validatedResume instanceof File) {
        // Handle new resume upload
        const uniqueFilename = `resumes/${userId}-${Date.now()}-${validatedResume.name.replace(/\s+/g, "_")}`;
        const blob = await put(uniqueFilename, validatedResume, {
          access: "public",
        });
        const newResume = await tx.resume.create({
          data: {
            title: validatedResume.name,
            url: blob.url,
            isPrimary: false, // Newly uploaded resumes are not primary by default
            userId: userId,
          },
        });
        finalResumeId = newResume.id;
      } else {
        // Handle existing resume selection
        const existingResumeId = validatedResume;

        const resumeToUse = await tx.resume.findFirst({
          where: {
            id: existingResumeId,
            userId: userId,
            deletedAt: null, // Ensure resume is not deleted
          },
        });

        if (!resumeToUse) {
          throw new Error(
            "The selected resume is invalid or no longer available. Please select another one."
          );
        }
        finalResumeId = resumeToUse.id;
      }

      // Create the JobApplication
      const newApplication = await tx.jobApplication.create({
        data: {
          jobId,
          userId,
          resumeId: finalResumeId,
          status: "NEW", // Default status, explicitly set for clarity
        },
      });

      // Create answers for the application
      const answerCreationTasks = Object.entries(validatedAnswers).map(
        ([questionId, text]) =>
          tx.answer.create({
            data: {
              text: text as string, // Cast to string as Zod ensures it
              questionId,
              jobApplicationId: newApplication.id,
            },
          })
      );

      await Promise.all(answerCreationTasks);
    });

    return { success: "Application submitted successfully!" };
  } catch (err) {
    console.error("An error occurred in submitApplication:", err);
    const errorMessage =
      err instanceof Error
        ? err.message
        : "An unexpected error occurred. Please try again.";
    return { error: errorMessage };
  }
};
