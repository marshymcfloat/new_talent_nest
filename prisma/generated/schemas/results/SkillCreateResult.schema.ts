import { z } from 'zod';
export const SkillCreateResultSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  users: z.array(z.unknown())
});