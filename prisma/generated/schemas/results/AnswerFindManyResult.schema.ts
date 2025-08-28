import { z } from 'zod';
export const AnswerFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  text: z.string(),
  jobApplicationId: z.string(),
  JobApplication: z.unknown(),
  questionId: z.string(),
  Question: z.unknown()
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