import { z } from 'zod';
export const JobDeleteManyResultSchema = z.object({
  count: z.number()
});