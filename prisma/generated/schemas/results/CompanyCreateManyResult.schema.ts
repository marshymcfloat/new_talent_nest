import { z } from 'zod';
export const CompanyCreateManyResultSchema = z.object({
  count: z.number()
});