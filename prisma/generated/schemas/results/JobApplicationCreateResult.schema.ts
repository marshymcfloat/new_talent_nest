import { z } from 'zod';
export const JobApplicationCreateResultSchema = z.object({
  id: z.string(),
  userId: z.string(),
  jobId: z.string(),
  resumeId: z.string(),
  resume: z.unknown(),
  Job: z.unknown(),
  User: z.unknown(),
  answers: z.array(z.unknown())
});