import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
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
export const CareerHistoryCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CareerHistoryCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CareerHistoryCountOrderByAggregateInput>;
export const CareerHistoryCountOrderByAggregateInputObjectZodSchema = makeSchema();
