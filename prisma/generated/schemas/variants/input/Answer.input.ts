import { z } from 'zod';

// prettier-ignore
export const AnswerInputSchema = z.object({
    id: z.string(),
    text: z.string(),
    jobApplicationId: z.string(),
    JobApplication: z.unknown(),
    questionId: z.string(),
    Question: z.unknown()
}).strict();

export type AnswerInputType = z.infer<typeof AnswerInputSchema>;
