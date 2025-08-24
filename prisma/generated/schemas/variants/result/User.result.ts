import { z } from 'zod';

// prettier-ignore
export const UserResultSchema = z.object({
    id: z.string(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    emailVerified: z.date().nullable(),
    image: z.string().nullable(),
    username: z.string().nullable(),
    password: z.string().nullable(),
    JobApplication: z.array(z.unknown()),
    accounts: z.array(z.unknown()),
    sessions: z.array(z.unknown())
}).strict();

export type UserResultType = z.infer<typeof UserResultSchema>;
