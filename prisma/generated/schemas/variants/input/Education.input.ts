import { z } from 'zod';

// prettier-ignore
export const EducationInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    course: z.string(),
    institution: z.string(),
    highlight: z.string().optional().nullable(),
    isComplete: z.boolean(),
    finishedYear: z.number().int().optional().nullable(),
    expectedFinishMonth: z.number().int().optional().nullable(),
    expectedFinishYear: z.number().int().optional().nullable()
}).strict();

export type EducationInputType = z.infer<typeof EducationInputSchema>;
