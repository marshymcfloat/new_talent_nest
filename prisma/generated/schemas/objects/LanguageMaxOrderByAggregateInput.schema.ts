import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional()
}).strict();
export const LanguageMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LanguageMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageMaxOrderByAggregateInput>;
export const LanguageMaxOrderByAggregateInputObjectZodSchema = makeSchema();
