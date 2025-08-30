import { z } from 'zod';

// prettier-ignore
export const CareerHistoryModelSchema = z.object({
    id: z.string(),
    title: z.string(),
    company: z.string(),
    dateStarted: z.date(),
    dateEnded: z.date(),
    description: z.string().nullable(),
    userId: z.string(),
    user: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CareerHistoryModelType = z.infer<typeof CareerHistoryModelSchema>;
