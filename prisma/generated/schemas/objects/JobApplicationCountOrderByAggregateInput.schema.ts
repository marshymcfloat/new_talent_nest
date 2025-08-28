import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  jobId: SortOrderSchema.optional(),
  resumeId: SortOrderSchema.optional()
}).strict();
export const JobApplicationCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.JobApplicationCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationCountOrderByAggregateInput>;
export const JobApplicationCountOrderByAggregateInputObjectZodSchema = makeSchema();
