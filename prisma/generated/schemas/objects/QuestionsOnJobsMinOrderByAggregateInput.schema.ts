import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  jobId: SortOrderSchema.optional(),
  questionId: SortOrderSchema.optional(),
  isRequired: SortOrderSchema.optional(),
  sortOrder: SortOrderSchema.optional()
}).strict();
export const QuestionsOnJobsMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsMinOrderByAggregateInput>;
export const QuestionsOnJobsMinOrderByAggregateInputObjectZodSchema = makeSchema();
