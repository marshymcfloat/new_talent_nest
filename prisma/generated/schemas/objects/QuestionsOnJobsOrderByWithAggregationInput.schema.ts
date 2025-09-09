import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { QuestionsOnJobsCountOrderByAggregateInputObjectSchema } from './QuestionsOnJobsCountOrderByAggregateInput.schema';
import { QuestionsOnJobsAvgOrderByAggregateInputObjectSchema } from './QuestionsOnJobsAvgOrderByAggregateInput.schema';
import { QuestionsOnJobsMaxOrderByAggregateInputObjectSchema } from './QuestionsOnJobsMaxOrderByAggregateInput.schema';
import { QuestionsOnJobsMinOrderByAggregateInputObjectSchema } from './QuestionsOnJobsMinOrderByAggregateInput.schema';
import { QuestionsOnJobsSumOrderByAggregateInputObjectSchema } from './QuestionsOnJobsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  jobId: SortOrderSchema.optional(),
  questionId: SortOrderSchema.optional(),
  isRequired: SortOrderSchema.optional(),
  sortOrder: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => QuestionsOnJobsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => QuestionsOnJobsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => QuestionsOnJobsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => QuestionsOnJobsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => QuestionsOnJobsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const QuestionsOnJobsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsOrderByWithAggregationInput>;
export const QuestionsOnJobsOrderByWithAggregationInputObjectZodSchema = makeSchema();
