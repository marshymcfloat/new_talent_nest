import { z } from 'zod';

// prettier-ignore
export const EducationModelSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    course: z.string(),
    institution: z.string(),
    highlight: z.string().nullable(),
    isComplete: z.boolean(),
    finishedYear: z.number().int().nullable(),
    expectedFinishMonth: z.number().int().nullable(),
    expectedFinishYear: z.number().int().nullable(),
    deletedAt: z.date().nullable()
}).strict();

export type EducationModelType = z.infer<typeof EducationModelSchema>;
