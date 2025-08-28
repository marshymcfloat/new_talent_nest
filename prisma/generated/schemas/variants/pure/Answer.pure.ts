import { z } from 'zod';

// prettier-ignore
export const AnswerModelSchema = z.object({
    id: z.string(),
    text: z.string(),
    jobApplicationId: z.string(),
    JobApplication: z.unknown(),
    questionId: z.string(),
    Question: z.unknown()
}).strict();

export type AnswerModelType = z.infer<typeof AnswerModelSchema>;
