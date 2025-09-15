"use server";

import { prisma } from "@/lib/prisma";
import { ApplicationStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function updateApplicationStatus(
  applicationId: string,
  status: ApplicationStatus,
  pathname: string
) {
  try {
    await prisma.jobApplication.update({
      where: { id: applicationId },
      data: { status },
    });

    revalidatePath(pathname);
    return { success: true };
  } catch (error) {
    console.error("Failed to update application status:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}
