import { z } from 'zod';
export const EducationFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  userId: z.string(),
  user: z.unknown(),
  course: z.string(),
  institution: z.string(),
  dateStarted: z.date(),
  dateEnded: z.date(),
  highlight: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
}));