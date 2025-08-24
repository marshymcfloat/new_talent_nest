import { z } from 'zod';
export const UserGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.date(),
  image: z.string(),
  username: z.string(),
  password: z.string(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    email: z.number(),
    emailVerified: z.number(),
    image: z.number(),
    username: z.number(),
    password: z.number(),
    JobApplication: z.number(),
    accounts: z.number(),
    sessions: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    emailVerified: z.date().nullable(),
    image: z.string().nullable(),
    username: z.string().nullable(),
    password: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    emailVerified: z.date().nullable(),
    image: z.string().nullable(),
    username: z.string().nullable(),
    password: z.string().nullable()
  }).nullable().optional()
}));