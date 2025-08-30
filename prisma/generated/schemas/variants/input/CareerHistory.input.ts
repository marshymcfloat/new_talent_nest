import { z } from 'zod';

// prettier-ignore
export const CareerHistoryInputSchema = z.object({
    id: z.string(),
    title: z.string(),
    company: z.string(),
    dateStarted: z.date(),
    dateEnded: z.date(),
    description: z.string().optional().nullable(),
    userId: z.string(),
    user: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CareerHistoryInputType = z.infer<typeof CareerHistoryInputSchema>;
