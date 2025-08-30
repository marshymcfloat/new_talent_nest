import { z } from 'zod';
export const CareerHistoryUpsertResultSchema = z.object({
  id: z.string(),
  title: z.string(),
  company: z.string(),
  dateStarted: z.date(),
  dateEnded: z.date(),
  description: z.string().optional(),
  userId: z.string(),
  user: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date()
});