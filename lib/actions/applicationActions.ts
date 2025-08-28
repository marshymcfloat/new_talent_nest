"use server";

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { createApplicationSchema } from "../zod schemas/applicationSchema";
import { getServerSession } from "next-auth";
export const submitApplication = async (formData: FormData) => {
  try {
    const session = await getServerSession();

    if (!session) {
      return { error: "You must be logged in to apply." };
    }

    const jobId = formData.get("jobId") as string;
    const resumeFile = formData.get("resumse") as File;
    const answers = formData.get("answers") as string;

    if (!jobId || !resumeFile || !answers) {
      return { error: "Missing form data" };
    }
  } catch (err) {}
};
