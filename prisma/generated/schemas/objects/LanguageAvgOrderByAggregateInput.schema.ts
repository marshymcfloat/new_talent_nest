import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const LanguageAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LanguageAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageAvgOrderByAggregateInput>;
export const LanguageAvgOrderByAggregateInputObjectZodSchema = makeSchema();
