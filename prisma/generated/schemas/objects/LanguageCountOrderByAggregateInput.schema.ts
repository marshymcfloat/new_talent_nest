import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional()
}).strict();
export const LanguageCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LanguageCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageCountOrderByAggregateInput>;
export const LanguageCountOrderByAggregateInputObjectZodSchema = makeSchema();
