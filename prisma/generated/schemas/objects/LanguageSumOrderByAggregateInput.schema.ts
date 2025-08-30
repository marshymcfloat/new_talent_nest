import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const LanguageSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LanguageSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageSumOrderByAggregateInput>;
export const LanguageSumOrderByAggregateInputObjectZodSchema = makeSchema();
