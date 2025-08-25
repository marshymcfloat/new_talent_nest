import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { JobApplicationCountOrderByAggregateInputObjectSchema } from './JobApplicationCountOrderByAggregateInput.schema';
import { JobApplicationMaxOrderByAggregateInputObjectSchema } from './JobApplicationMaxOrderByAggregateInput.schema';
import { JobApplicationMinOrderByAggregateInputObjectSchema } from './JobApplicationMinOrderByAggregateInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  jobId: SortOrderSchema.optional(),
  _count: z.lazy(() => JobApplicationCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => JobApplicationMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => JobApplicationMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const JobApplicationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.JobApplicationOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationOrderByWithAggregationInput>;
export const JobApplicationOrderByWithAggregationInputObjectZodSchema = makeSchema();
