import { z } from 'zod';

// prettier-ignore
export const QuestionsOnJobsModelSchema = z.object({
    jobId: z.string(),
    questionId: z.string(),
    job: z.unknown(),
    question: z.unknown(),
    isRequired: z.boolean(),
    sortOrder: z.number().int().nullable()
}).strict();

export type QuestionsOnJobsModelType = z.infer<typeof QuestionsOnJobsModelSchema>;
