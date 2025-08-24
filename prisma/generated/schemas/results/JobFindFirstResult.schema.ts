import { z } from 'zod';
export const JobFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  company: z.string(),
  title: z.string(),
  location: z.string(),
  type: z.unknown(),
  salary: z.string(),
  JobClass: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  JobApplication: z.array(z.unknown())
}));