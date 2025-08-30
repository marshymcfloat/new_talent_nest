import { z } from 'zod';

// prettier-ignore
export const SkillModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    users: z.array(z.unknown())
}).strict();

export type SkillModelType = z.infer<typeof SkillModelSchema>;
