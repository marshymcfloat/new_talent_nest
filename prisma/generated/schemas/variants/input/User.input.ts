import { z } from 'zod';

// prettier-ignore
export const UserInputSchema = z.object({
    id: z.string(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    username: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
    JobApplication: z.array(z.unknown()),
    accounts: z.array(z.unknown()),
    sessions: z.array(z.unknown())
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
