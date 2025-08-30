import { z } from 'zod';
export const SkillCreateManyResultSchema = z.object({
  count: z.number()
});