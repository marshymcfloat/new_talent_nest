import { z } from 'zod';
export const LanguageCreateManyResultSchema = z.object({
  count: z.number()
});