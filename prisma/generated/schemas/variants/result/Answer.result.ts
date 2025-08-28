import { z } from 'zod';

// prettier-ignore
export const AnswerResultSchema = z.object({
    id: z.string(),
    text: z.string(),
    jobApplicationId: z.string(),
    JobApplication: z.unknown(),
    questionId: z.string(),
    Question: z.unknown()
}).strict();

export type AnswerResultType = z.infer<typeof AnswerResultSchema>;
