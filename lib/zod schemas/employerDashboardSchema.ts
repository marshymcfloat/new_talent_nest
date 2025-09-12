import { JobClass, JobType, QuestionType, SalaryPeriod } from "@prisma/client";
import { z } from "zod";

export const createJobSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters."),
  location: z.string().min(3, "Location is required."),
  class: z.nativeEnum(JobClass),
  type: z.nativeEnum(JobType),
  summary: z.string().min(20, "Summary must be at least 20 characters."),
  qualifications: z
    .string()
    .min(20, "Qualifications must be at least 20 characters."),
  responsibilities: z
    .string()
    .min(20, "Responsibilities must be at least 20 characters."),
  benefits: z.string().optional(),
  minSalary: z.coerce.number().optional(),
  maxSalary: z.coerce.number().optional(),
  currency: z.string().min(3).max(3),
  payPeriod: z.nativeEnum(SalaryPeriod).optional(),
  questions: z
    .array(
      z.object({
        questionId: z.string(),
        isRequired: z.boolean(),
      })
    )
    .optional(),
  tags: z.array(z.string()).optional(),
});

export type CreateJobValues = z.infer<typeof createJobSchema>;

export const createQuestionSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal(QuestionType.MULTIPLE_CHOICE),
    text: z.string().min(10, "Question text must be at least 10 characters."),
    options: z
      .array(z.string().min(1, "Option cannot be empty."))
      .min(2, "You must provide at least two options."),
  }),

  z.object({
    type: z.enum([QuestionType.TEXT, QuestionType.YES_NO, QuestionType.NUMBER]),
    text: z.string().min(10, "Question text must be at least 10 characters."),
    options: z.array(z.string()).optional(),
  }),
]);

export type CreateQuestionValues = z.infer<typeof createQuestionSchema>;
