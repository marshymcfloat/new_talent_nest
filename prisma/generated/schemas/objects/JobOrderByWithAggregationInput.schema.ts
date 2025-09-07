import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { JobCountOrderByAggregateInputObjectSchema } from './JobCountOrderByAggregateInput.schema';
import { JobMaxOrderByAggregateInputObjectSchema } from './JobMaxOrderByAggregateInput.schema';
import { JobMinOrderByAggregateInputObjectSchema } from './JobMinOrderByAggregateInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  companyId: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  location: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  salary: SortOrderSchema.optional(),
  jobClass: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  summary: SortOrderSchema.optional(),
  qualifications: SortOrderSchema.optional(),
  responsibilities: SortOrderSchema.optional(),
  benefits: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tags: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => JobCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => JobMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => JobMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const JobOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.JobOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.JobOrderByWithAggregationInput>;
export const JobOrderByWithAggregationInputObjectZodSchema = makeSchema();
