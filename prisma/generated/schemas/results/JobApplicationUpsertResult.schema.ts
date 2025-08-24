import { z } from 'zod';
export const JobApplicationUpsertResultSchema = z.object({
  id: z.string(),
  userId: z.string(),
  jobId: z.string(),
  Job: z.unknown(),
  User: z.unknown()
});