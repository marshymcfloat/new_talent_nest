import { z } from 'zod';

// prettier-ignore
export const CareerHistoryResultSchema = z.object({
    id: z.string(),
    title: z.string(),
    company: z.string(),
    dateStarted: z.date(),
    dateEnded: z.date().nullable(),
    description: z.string().nullable(),
    userId: z.string(),
    user: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CareerHistoryResultType = z.infer<typeof CareerHistoryResultSchema>;
