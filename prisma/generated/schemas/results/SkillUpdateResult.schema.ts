import { z } from 'zod';
export const SkillUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  users: z.array(z.unknown())
}));