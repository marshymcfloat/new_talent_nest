import { z } from 'zod';
export const EducationFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  userId: z.string(),
  user: z.unknown(),
  course: z.string(),
  institution: z.string(),
  highlight: z.string().optional(),
  isComplete: z.boolean(),
  finishedYear: z.number().int().optional(),
  expectedFinishMonth: z.number().int().optional(),
  expectedFinishYear: z.number().int().optional()
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