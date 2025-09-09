import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  jobId: SortOrderSchema.optional(),
  questionId: SortOrderSchema.optional(),
  isRequired: SortOrderSchema.optional(),
  sortOrder: SortOrderSchema.optional()
}).strict();
export const QuestionsOnJobsMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsMaxOrderByAggregateInput>;
export const QuestionsOnJobsMaxOrderByAggregateInputObjectZodSchema = makeSchema();
