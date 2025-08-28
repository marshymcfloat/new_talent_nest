import { z } from 'zod';
export const AnswerCreateManyResultSchema = z.object({
  count: z.number()
});