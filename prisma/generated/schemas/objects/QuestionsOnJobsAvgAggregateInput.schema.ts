import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  sortOrder: z.literal(true).optional()
}).strict();
export const QuestionsOnJobsAvgAggregateInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsAvgAggregateInputType>;
export const QuestionsOnJobsAvgAggregateInputObjectZodSchema = makeSchema();
