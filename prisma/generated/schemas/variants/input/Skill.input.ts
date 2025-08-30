import { z } from 'zod';

// prettier-ignore
export const SkillInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    users: z.array(z.unknown())
}).strict();

export type SkillInputType = z.infer<typeof SkillInputSchema>;
