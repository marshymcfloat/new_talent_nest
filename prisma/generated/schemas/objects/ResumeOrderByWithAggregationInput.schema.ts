import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ResumeCountOrderByAggregateInputObjectSchema } from './ResumeCountOrderByAggregateInput.schema';
import { ResumeMaxOrderByAggregateInputObjectSchema } from './ResumeMaxOrderByAggregateInput.schema';
import { ResumeMinOrderByAggregateInputObjectSchema } from './ResumeMinOrderByAggregateInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  isPrimary: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ResumeCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ResumeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ResumeMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ResumeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ResumeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeOrderByWithAggregationInput>;
export const ResumeOrderByWithAggregationInputObjectZodSchema = makeSchema();
