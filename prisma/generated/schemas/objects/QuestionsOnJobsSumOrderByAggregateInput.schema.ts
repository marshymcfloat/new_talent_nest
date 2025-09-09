import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  sortOrder: SortOrderSchema.optional()
}).strict();
export const QuestionsOnJobsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsSumOrderByAggregateInput>;
export const QuestionsOnJobsSumOrderByAggregateInputObjectZodSchema = makeSchema();
