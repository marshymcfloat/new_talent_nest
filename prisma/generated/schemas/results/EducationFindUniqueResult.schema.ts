import { z } from 'zod';
export const EducationFindUniqueResultSchema = z.nullable(z.object({
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
}));