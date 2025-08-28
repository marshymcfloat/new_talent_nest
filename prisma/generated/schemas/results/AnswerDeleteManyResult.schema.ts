import { z } from 'zod';
export const AnswerDeleteManyResultSchema = z.object({
  count: z.number()
});