import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { JobCountOrderByAggregateInputObjectSchema } from './JobCountOrderByAggregateInput.schema';
import { JobMaxOrderByAggregateInputObjectSchema } from './JobMaxOrderByAggregateInput.schema';
import { JobMinOrderByAggregateInputObjectSchema } from './JobMinOrderByAggregateInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  company: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  location: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  salary: SortOrderSchema.optional(),
  JobClass: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => JobCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => JobMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => JobMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const JobOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.JobOrderByWithAggregationInput> = makeSchema();
export const JobOrderByWithAggregationInputObjectZodSchema = makeSchema();
