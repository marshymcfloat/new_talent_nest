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
  resumes: z.array(z.unknown()),
  JobApplication: z.array(z.unknown()),
  summary: z.string().optional(),
  previousCareers: z.array(z.unknown()),
  education: z.array(z.unknown()),
  skills: z.array(z.unknown()),
  languages: z.array(z.unknown()),
  availability: z.unknown().optional(),
  preferredWorkType: z.unknown().optional(),
  preferredLocation: z.array(z.string()),
  rightToWork: z.array(z.string()),
  expectedSalary: z.string().optional(),
  jobClassification: z.array(z.unknown()),
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