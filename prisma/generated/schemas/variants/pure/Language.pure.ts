import { z } from 'zod';

// prettier-ignore
export const LanguageModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    users: z.array(z.unknown())
}).strict();

export type LanguageModelType = z.infer<typeof LanguageModelSchema>;
