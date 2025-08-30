import { z } from 'zod';
export const LanguageFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  users: z.array(z.unknown())
}));