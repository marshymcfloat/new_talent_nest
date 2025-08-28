import { z } from 'zod';
export const ResumeCreateResultSchema = z.object({
  id: z.string(),
  title: z.string(),
  url: z.string(),
  isPrimary: z.boolean(),
  userId: z.string(),
  User: z.unknown(),
  JobApplications: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
});