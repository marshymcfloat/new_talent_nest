import { z } from "zod";

export const createJobSchema = z.object({
  title: z.string(),

  location: z.string(),
  type: z.enum(["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP"]),
  minSalary: z.int().optional(),
  maxSalary: z.int().optional(),
  currency: z.enum(["PHP", "USD"]),
  payPeriod: z.enum(["MONTHLY", "ANNUALLY", "HOURLY"]).optional(),
  class: z.enum(["IT", "ACCOUNTING", "ENGINEERING"]),
  status: z.enum(["ACTIVE", "INACTIVE", "EXPIRED"]),
  summary: z.string().optional(),
  qualifications: z.string().optional(),
  responsibilities: z.string().optional(),
  benefits: z.string().optional(),
  employerQuestions: z.string(),
  tags: z.array(z.string()),
});

export type CreateJobValues = z.infer<typeof createJobSchema>;
