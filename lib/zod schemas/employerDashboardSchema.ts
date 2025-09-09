import { JobClass, JobType, SalaryPeriod } from "@prisma/client";
import { z } from "zod";

export const createJobSchema = z
  .object({
    title: z.string().min(3, "Job title must be at least 3 characters long."),
    location: z.string().min(2, "Location is required."),
    class: z.nativeEnum(JobClass),
    type: z.nativeEnum(JobType),
    summary: z.string().min(10, "Summary is required."),
    qualifications: z.string().min(10, "Qualifications are required."),
    responsibilities: z.string().min(10, "Responsibilities are required."),
    benefits: z.string().optional(),

    minSalary: z.coerce
      .number()
      .min(0, "Salary cannot be negative.")
      .optional(),
    maxSalary: z.coerce
      .number()
      .min(0, "Salary cannot be negative.")
      .optional(),

    currency: z.string().default("PHP"),
    payPeriod: z.nativeEnum(SalaryPeriod).optional(),

    questions: z
      .array(
        z.object({
          questionId: z.string(),
          isRequired: z.boolean(),
        })
      )
      .optional(),

    tags: z.array(z.string()).optional(), // Assuming tags might be added later
  })
  .refine(
    (data) => {
      if (data.minSalary && data.maxSalary) {
        return data.minSalary <= data.maxSalary;
      }
      return true;
    },
    {
      message: "Minimum salary cannot be greater than maximum salary.",
      path: ["minSalary"], // Assign the error to the minSalary field
    }
  );

export const createQuestionSchema = z
  .object({
    type: z.enum(["TEXT", "YES_NO", "MULTIPLE_CHOICE", "NUMBER"]),
    options: z.array(z.string().min(1, "Option cannot be empty.")).optional(),
    text: z.string().min(3, "Question must be at least 3 characters long."),
  })
  .refine(
    (data) => {
      if (data.type === "MULTIPLE_CHOICE") {
        return data.options && data.options.length >= 2;
      }
      return true;
    },
    {
      message: "Multiple choice questions must have at least two options.",
      path: ["options"],
    }
  );

export type CreateQuestionValues = z.infer<typeof createQuestionSchema>;
export type CreateJobValues = z.infer<typeof createJobSchema>;
