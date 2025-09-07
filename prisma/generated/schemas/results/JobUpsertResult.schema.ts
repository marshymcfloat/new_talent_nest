import { z } from 'zod';
export const JobUpsertResultSchema = z.object({
  id: z.string(),
  companyId: z.string(),
  company: z.unknown(),
  title: z.string(),
  location: z.string(),
  type: z.unknown(),
  salary: z.string(),
  jobClass: z.unknown(),
  status: z.unknown(),
  summary: z.string(),
  qualifications: z.string(),
  responsibilities: z.string(),
  benefits: z.string().optional(),
  employerQuestions: z.array(z.unknown()),
  tags: z.array(z.string()),
  JobApplication: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
});