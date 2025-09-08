import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  minSalary: SortOrderSchema.optional(),
  maxSalary: SortOrderSchema.optional()
}).strict();
export const JobSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.JobSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.JobSumOrderByAggregateInput>;
export const JobSumOrderByAggregateInputObjectZodSchema = makeSchema();
