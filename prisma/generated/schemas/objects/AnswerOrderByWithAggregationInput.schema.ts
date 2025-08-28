import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AnswerCountOrderByAggregateInputObjectSchema } from './AnswerCountOrderByAggregateInput.schema';
import { AnswerMaxOrderByAggregateInputObjectSchema } from './AnswerMaxOrderByAggregateInput.schema';
import { AnswerMinOrderByAggregateInputObjectSchema } from './AnswerMinOrderByAggregateInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  text: SortOrderSchema.optional(),
  jobApplicationId: SortOrderSchema.optional(),
  questionId: SortOrderSchema.optional(),
  _count: z.lazy(() => AnswerCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AnswerMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AnswerMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AnswerOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AnswerOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerOrderByWithAggregationInput>;
export const AnswerOrderByWithAggregationInputObjectZodSchema = makeSchema();
