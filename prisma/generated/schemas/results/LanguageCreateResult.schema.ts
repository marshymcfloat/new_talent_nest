import { z } from 'zod';
export const LanguageCreateResultSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  users: z.array(z.unknown())
});