import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  text: SortOrderSchema.optional(),
  jobApplicationId: SortOrderSchema.optional(),
  questionId: SortOrderSchema.optional()
}).strict();
export const AnswerCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AnswerCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerCountOrderByAggregateInput>;
export const AnswerCountOrderByAggregateInputObjectZodSchema = makeSchema();
