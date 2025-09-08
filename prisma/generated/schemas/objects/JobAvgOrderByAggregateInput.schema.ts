import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  minSalary: SortOrderSchema.optional(),
  maxSalary: SortOrderSchema.optional()
}).strict();
export const JobAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.JobAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.JobAvgOrderByAggregateInput>;
export const JobAvgOrderByAggregateInputObjectZodSchema = makeSchema();
