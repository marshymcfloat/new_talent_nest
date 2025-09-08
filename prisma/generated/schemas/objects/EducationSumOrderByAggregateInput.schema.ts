import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  finishedYear: SortOrderSchema.optional(),
  expectedFinishMonth: SortOrderSchema.optional(),
  expectedFinishYear: SortOrderSchema.optional()
}).strict();
export const EducationSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EducationSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EducationSumOrderByAggregateInput>;
export const EducationSumOrderByAggregateInputObjectZodSchema = makeSchema();
