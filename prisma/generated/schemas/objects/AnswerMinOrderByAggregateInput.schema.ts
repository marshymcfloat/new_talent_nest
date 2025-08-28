import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  text: SortOrderSchema.optional(),
  jobApplicationId: SortOrderSchema.optional(),
  questionId: SortOrderSchema.optional()
}).strict();
export const AnswerMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AnswerMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerMinOrderByAggregateInput>;
export const AnswerMinOrderByAggregateInputObjectZodSchema = makeSchema();
