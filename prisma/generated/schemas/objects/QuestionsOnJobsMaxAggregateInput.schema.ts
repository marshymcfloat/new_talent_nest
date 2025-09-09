import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  jobId: z.literal(true).optional(),
  questionId: z.literal(true).optional(),
  isRequired: z.literal(true).optional(),
  sortOrder: z.literal(true).optional()
}).strict();
export const QuestionsOnJobsMaxAggregateInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsMaxAggregateInputType>;
export const QuestionsOnJobsMaxAggregateInputObjectZodSchema = makeSchema();
