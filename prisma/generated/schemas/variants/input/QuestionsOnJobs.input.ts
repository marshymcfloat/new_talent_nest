import { z } from 'zod';

// prettier-ignore
export const QuestionsOnJobsInputSchema = z.object({
    jobId: z.string(),
    questionId: z.string(),
    job: z.unknown(),
    question: z.unknown(),
    isRequired: z.boolean(),
    sortOrder: z.number().int().optional().nullable()
}).strict();

export type QuestionsOnJobsInputType = z.infer<typeof QuestionsOnJobsInputSchema>;
