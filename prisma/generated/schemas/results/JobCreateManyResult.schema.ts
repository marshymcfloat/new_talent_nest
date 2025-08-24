import { z } from 'zod';
export const JobCreateManyResultSchema = z.object({
  count: z.number()
});