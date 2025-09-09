import { z } from 'zod';
export const CompanyQuestionFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  text: z.string(),
  type: z.unknown(),
  options: z.array(z.string()),
  companyId: z.string(),
  company: z.unknown(),
  jobs: z.array(z.unknown()),
  answers: z.array(z.unknown()),
  isArchived: z.boolean()
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