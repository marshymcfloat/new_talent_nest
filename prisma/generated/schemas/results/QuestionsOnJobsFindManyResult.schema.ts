import { z } from 'zod';
export const QuestionsOnJobsFindManyResultSchema = z.object({
  data: z.array(z.object({
  jobId: z.string(),
  questionId: z.string(),
  job: z.unknown(),
  question: z.unknown(),
  isRequired: z.boolean(),
  sortOrder: z.number().int().optional()
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