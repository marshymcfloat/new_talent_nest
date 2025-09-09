import { z } from 'zod';
export const QuestionsOnJobsDeleteResultSchema = z.nullable(z.object({
  jobId: z.string(),
  questionId: z.string(),
  job: z.unknown(),
  question: z.unknown(),
  isRequired: z.boolean(),
  sortOrder: z.number().int().optional()
}));