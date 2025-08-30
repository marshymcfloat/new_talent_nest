import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const CareerHistoryOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.CareerHistoryOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CareerHistoryOrderByRelationAggregateInput>;
export const CareerHistoryOrderByRelationAggregateInputObjectZodSchema = makeSchema();
