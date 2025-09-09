import { z } from 'zod';
export const CompanyFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  websiteUrl: z.string().optional(),
  logoUrl: z.string().optional(),
  verifiedDomains: z.array(z.string()),
  jobs: z.array(z.unknown()),
  questions: z.array(z.unknown()),
  members: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
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