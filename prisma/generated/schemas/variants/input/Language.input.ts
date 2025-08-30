import { z } from 'zod';

// prettier-ignore
export const LanguageInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    users: z.array(z.unknown())
}).strict();

export type LanguageInputType = z.infer<typeof LanguageInputSchema>;
