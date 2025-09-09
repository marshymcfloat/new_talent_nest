import { z } from 'zod';
export const QuestionsOnJobsUpdateResultSchema = z.nullable(z.object({
  jobId: z.string(),
  questionId: z.string(),
  job: z.unknown(),
  question: z.unknown(),
  isRequired: z.boolean(),
  sortOrder: z.number().int().optional()
}));