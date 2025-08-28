import { z } from 'zod';
export const AnswerFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  text: z.string(),
  jobApplicationId: z.string(),
  JobApplication: z.unknown(),
  questionId: z.string(),
  Question: z.unknown()
}));