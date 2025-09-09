import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  sortOrder: SortOrderSchema.optional()
}).strict();
export const QuestionsOnJobsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsAvgOrderByAggregateInput>;
export const QuestionsOnJobsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
