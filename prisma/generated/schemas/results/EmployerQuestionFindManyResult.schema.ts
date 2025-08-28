import { z } from 'zod';
export const EmployerQuestionFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  text: z.string(),
  type: z.unknown(),
  isRequired: z.boolean(),
  options: z.array(z.string()),
  jobId: z.string(),
  Job: z.unknown(),
  answers: z.array(z.unknown())
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