import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const LanguageOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.LanguageOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageOrderByRelationAggregateInput>;
export const LanguageOrderByRelationAggregateInputObjectZodSchema = makeSchema();
