import { z } from "zod";

export const summarySchema = z.object({
  summary: z
    .string()
    .min(6, { message: "Summary should have at least 6 characters." })
    .max(500, { message: "summary shoud not exceed 500 characters." }),
});

export const languageSchema = z.object({
  language: z.string().optional(),
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

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) =>
  (currentYear - i).toString()
);

export const addEducationSchema = z
  .object({
    course: z
      .string()
      .min(1, { message: "Course or qualification is required." })
      .max(100, { message: "This field should not exceed 100 characters." }),

    institution: z.string().min(1, { message: "Institution is required." }),

    isComplete: z.boolean(),

    expectedFinishMonth: z.string().optional(),
    expectedFinishYear: z.string().optional(),

    finishedYear: z.enum(["", ...years]).optional(),

    highlights: z
      .string()
      .max(2000, { message: "Highlights should not exceed 2000 characters." })
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (data.isComplete) {
      if (data.expectedFinishMonth || data.expectedFinishYear) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Cannot provide an expected finish date for a completed qualification.",
          path: ["expectedFinishYear"],
        });
      }
    } else {
      if (data.finishedYear) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Cannot provide a finish date for an incomplete qualification.",
          path: ["finishedYear"],
        });
      }
    }
  });
