import { z } from 'zod';
export const CareerHistoryCreateResultSchema = z.object({
  id: z.string(),
  title: z.string(),
  company: z.string(),
  dateStarted: z.date(),
  dateEnded: z.date().optional(),
  description: z.string().optional(),
  userId: z.string(),
  user: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional()
});