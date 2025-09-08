import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  company: SortOrderSchema.optional(),
  dateStarted: SortOrderSchema.optional(),
  dateEnded: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional()
}).strict();
export const CareerHistoryMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CareerHistoryMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CareerHistoryMinOrderByAggregateInput>;
export const CareerHistoryMinOrderByAggregateInputObjectZodSchema = makeSchema();
