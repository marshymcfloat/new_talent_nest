"use server";

import { prisma } from "@/lib/prisma";
import { updateJobSchema } from "./employerJobsTabSchema";
import { createValidatedAuthedAction } from "@/lib/sessionUtils";
import { revalidatePath } from "next/cache";
import { formatCapitalizeString } from "@/lib/utils";
export const updateEmployerJob = createValidatedAuthedAction(
  updateJobSchema,
  async (validatedData, session) => {
    // 1. Separate the questions array from the rest of the job data
    const { questions, id, ...jobData } = validatedData;
    const { user } = session;

    try {
      // 2. Use a Prisma transaction to ensure atomicity
      const updatedJob = await prisma.$transaction(async (tx) => {
        // Action A: Update the simple fields of the Job model itself
        const updatedJobDetails = await tx.job.update({
          where: { id },
          data: {
            ...jobData,
            title: formatCapitalizeString(jobData.title),
          },
        });

        // Action B: Delete all existing question connections for this job
        await tx.questionsOnJobs.deleteMany({
          where: {
            jobId: id,
          },
        });

        // Action C: Create the new question connections from the form data
        if (questions && questions.length > 0) {
          await tx.questionsOnJobs.createMany({
            data: questions.map((q) => ({
              jobId: id, // Link to the current job
              questionId: q.questionId,
              isRequired: q.isRequired,
            })),
          });
        }

        return updatedJobDetails;
      });

      revalidatePath(`/${user.id}/jobs`);

      // Return the successfully updated job data (without the relation details)
      return { data: { ...updatedJob, questions } };
    } catch (err) {
      console.error("Failed to update job:", err);
      return { error: "An unexpected error occurred while updating the job." };
    }
  }
);
