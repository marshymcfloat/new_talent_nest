import { z } from 'zod';
export const JobApplicationFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  userId: z.string(),
  jobId: z.string(),
  resumeId: z.string(),
  resume: z.unknown(),
  Job: z.unknown(),
  User: z.unknown(),
  answers: z.array(z.unknown()),
  status: z.unknown(),
  notes: z.string().optional(),
  isArchived: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date()
}));