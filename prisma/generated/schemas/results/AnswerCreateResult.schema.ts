import { z } from 'zod';
export const AnswerCreateResultSchema = z.object({
  id: z.string(),
  text: z.string(),
  jobApplicationId: z.string(),
  JobApplication: z.unknown(),
  questionId: z.string(),
  Question: z.unknown()
});