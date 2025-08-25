import { z } from 'zod';
export const UserFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});