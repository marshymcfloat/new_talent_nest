import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CareerHistoryCountOrderByAggregateInputObjectSchema } from './CareerHistoryCountOrderByAggregateInput.schema';
import { CareerHistoryMaxOrderByAggregateInputObjectSchema } from './CareerHistoryMaxOrderByAggregateInput.schema';
import { CareerHistoryMinOrderByAggregateInputObjectSchema } from './CareerHistoryMinOrderByAggregateInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  company: SortOrderSchema.optional(),
  dateStarted: SortOrderSchema.optional(),
  dateEnded: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => CareerHistoryCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CareerHistoryMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CareerHistoryMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CareerHistoryOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CareerHistoryOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CareerHistoryOrderByWithAggregationInput>;
export const CareerHistoryOrderByWithAggregationInputObjectZodSchema = makeSchema();
