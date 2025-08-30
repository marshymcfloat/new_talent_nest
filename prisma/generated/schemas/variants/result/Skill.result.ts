import { z } from 'zod';

// prettier-ignore
export const SkillResultSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    users: z.array(z.unknown())
}).strict();

export type SkillResultType = z.infer<typeof SkillResultSchema>;
