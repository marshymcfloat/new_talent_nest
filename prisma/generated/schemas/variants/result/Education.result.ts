import { z } from 'zod';

// prettier-ignore
export const EducationResultSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    course: z.string(),
    institution: z.string(),
    dateStarted: z.date(),
    dateEnded: z.date(),
    highlight: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type EducationResultType = z.infer<typeof EducationResultSchema>;
