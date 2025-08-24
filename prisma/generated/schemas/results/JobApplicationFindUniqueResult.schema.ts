import { z } from 'zod';
export const JobApplicationFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  userId: z.string(),
  jobId: z.string(),
  Job: z.unknown(),
  User: z.unknown()
}));