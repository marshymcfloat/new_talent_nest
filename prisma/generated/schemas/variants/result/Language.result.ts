import { z } from 'zod';

// prettier-ignore
export const LanguageResultSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    users: z.array(z.unknown())
}).strict();

export type LanguageResultType = z.infer<typeof LanguageResultSchema>;
