import { z } from 'zod';

// prettier-ignore
export const EducationInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    course: z.string(),
    institution: z.string(),
    dateStarted: z.date(),
    dateEnded: z.date(),
    highlight: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type EducationInputType = z.infer<typeof EducationInputSchema>;
