import { z } from 'zod';
export const SkillUpsertResultSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  users: z.array(z.unknown())
});