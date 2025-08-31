import { z } from "zod";

export const addSumarrySchema = z.object({
  summary: z
    .string()
    .min(6, { message: "Summary should have at least 6 characters." })
    .max(500, { message: "summary shoud not exceed 500 characters." }),
});

export const addCareerSchema = z
  .object({
    title: z
      .string()
      .min(6, { message: "Job title must be at least 6 characters." })
      .max(100, { message: "Job title cannot exceed 100 characters." }),
    company: z
      .string()
      .min(1, { message: "Company name is required." })
      .max(50, { message: "Company name cannot exceed 50 characters." }),

    dateStarted: z
      .date()
      .refine((date) => date !== null && date !== undefined, {
        message: "A start date is required.",
      }),

    dateEnded: z.date().optional(),

    description: z
      .string()
      .max(500, { message: "Description cannot exceed 500 characters." })
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (
      data.dateEnded &&
      data.dateStarted &&
      data.dateStarted > data.dateEnded
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "End date cannot be earlier than the start date.",
        path: ["dateEnded"],
      });
    }
  });
