import { z } from "zod";
import { JobClass, JobType } from "@prisma/client";

export const createJobSchema = z.object({
  company: z.string().min(2, "Company name is required"),
  title: z.string().min(6, "Title must be at least 6 characters").max(50),
  location: z.string().min(6, "Location must be at least 6 characters"),
  type: z.nativeEnum(JobType),
  salary: z.string(),

  jobClass: z.nativeEnum(JobClass),

  summary: z.string().default("no summary provided"),
  qualifications: z.string().default("no qualifications provided"),
  responsibilities: z.string().default("no responsibilities provided"),
  benefits: z.string().optional(),

  employerQuestions: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
});
