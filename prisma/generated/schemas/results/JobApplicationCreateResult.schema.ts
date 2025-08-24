import { z } from 'zod';
export const JobApplicationCreateResultSchema = z.object({
  id: z.string(),
  userId: z.string(),
  jobId: z.string(),
  Job: z.unknown(),
  User: z.unknown()
});