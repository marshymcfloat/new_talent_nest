import { z } from 'zod';
export const JobDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  company: z.string(),
  title: z.string(),
  location: z.string(),
  type: z.unknown(),
  salary: z.string(),
  jobClass: z.unknown(),
  summary: z.string(),
  qualifications: z.string(),
  responsibilities: z.string(),
  benefits: z.string().optional(),
  employerQuestions: z.array(z.string()),
  tags: z.array(z.string()),
  createdAt: z.date(),
  updatedAt: z.date(),
  JobApplication: z.array(z.unknown())
}));