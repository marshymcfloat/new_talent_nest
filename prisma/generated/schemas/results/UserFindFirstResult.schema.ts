import { z } from 'zod';
export const UserFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string().optional(),
  email: z.string().optional(),
  emailVerified: z.date().optional(),
  image: z.string().optional(),
  username: z.string().optional(),
  password: z.string().optional(),
  resumes: z.array(z.string()),
  JobApplication: z.array(z.unknown()),
  accounts: z.array(z.unknown()),
  sessions: z.array(z.unknown())
}));