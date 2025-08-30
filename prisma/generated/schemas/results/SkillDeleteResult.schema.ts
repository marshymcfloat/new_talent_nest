import { z } from 'zod';
export const SkillDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  users: z.array(z.unknown())
}));