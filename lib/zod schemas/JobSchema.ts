import { z } from "zod";
import { JobClass, JobType, QuestionType } from "@prisma/client";

const employerQuestionSchema = z.object({
  text: z.string().min(10, "Question must be at least 10 characters long."),
  type: z.nativeEnum(QuestionType),
  isRequired: z.boolean().default(true),
  options: z.array(z.string()).optional(),
});

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

  employerQuestions: z.array(employerQuestionSchema).optional().default([]),

  tags: z.array(z.string()).default([]),
});
