import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  jobId: SortOrderSchema.optional()
}).strict();
export const JobApplicationMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.JobApplicationMinOrderByAggregateInput> = makeSchema();
export const JobApplicationMinOrderByAggregateInputObjectZodSchema = makeSchema();
