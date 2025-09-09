import { z } from 'zod';

// prettier-ignore
export const QuestionsOnJobsResultSchema = z.object({
    jobId: z.string(),
    questionId: z.string(),
    job: z.unknown(),
    question: z.unknown(),
    isRequired: z.boolean(),
    sortOrder: z.number().int().nullable()
}).strict();

export type QuestionsOnJobsResultType = z.infer<typeof QuestionsOnJobsResultSchema>;
