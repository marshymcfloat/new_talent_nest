"use server";

import { prisma } from "@/lib/prisma";
import { updateJobSchema } from "./employerJobsTabSchema";
import { createValidatedAuthedAction } from "@/lib/sessionUtils";
import { revalidatePath } from "next/cache";
import { formatCapitalizeString } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
export const updateEmployerJob = createValidatedAuthedAction(
  updateJobSchema,
  async (validatedData, session) => {
    const { questions, id, ...jobData } = validatedData;
    const { user } = session;

    try {
      const updatedJob = await prisma.$transaction(async (tx) => {
        const updatedJobDetails = await tx.job.update({
          where: { id },
          data: {
            ...jobData,
            title: formatCapitalizeString(jobData.title),
          },
        });

        await tx.questionsOnJobs.deleteMany({
          where: {
            jobId: id,
          },
        });

        if (questions && questions.length > 0) {
          await tx.questionsOnJobs.createMany({
            data: questions.map((q) => ({
              jobId: id,
              questionId: q.questionId,
              isRequired: q.isRequired,
            })),
          });
        }

        return updatedJobDetails;
      });

      revalidatePath(`/${user.id}/jobs`);

      return { data: { ...updatedJob, questions } };
    } catch (err) {
      console.error("Failed to update job:", err);
      return { error: "An unexpected error occurred while updating the job." };
    }
  }
);

export const closeEmployerJob = async (jobId: string) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user.id || session?.user.role !== "EMPLOYER") {
      throw new Error("You must log in first or you must be an Employer");
    }

    const updatedJob = await prisma.job.update({
      where: { id: jobId },
      data: {
        status: "CLOSED",
      },
    });

    revalidatePath(`/${session.user.id}/jobs`);
    // This success return is fine as it is.
    return { success: true, data: updatedJob.id };
  } catch (err) {
    console.error(err);
    // ✨ THE FIX: Explicitly return `success: false` in the error case.
    const errorMessage =
      err instanceof Error ? err.message : "An unexpected error occurred";
    return { success: false, error: errorMessage };
  }
};

export async function pauseEmployerJob(jobId: string) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user.id || session?.user.role !== "EMPLOYER") {
      throw new Error("You must log in first or you must be an Employer");
    }
    await prisma.job.update({
      where: { id: jobId },
      data: { status: "PAUSED" },
    });
    revalidatePath(`/${session.user.id}/jobs`);

    return { success: true };
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "An unexpected error occurred";
    return { success: false, error: errorMessage };
  }
}

export async function activateEmployerJob(jobId: string) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user.id || session?.user.role !== "EMPLOYER") {
      throw new Error("You must log in first or you must be an Employer");
    }

    await prisma.job.update({
      where: { id: jobId },
      data: { status: "ACTIVE" },
    });
    revalidatePath(`/${session.user.id}/jobs`);

    return { success: true };
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "An unexpected error occurred";
    return { success: false, error: errorMessage };
  }
}
