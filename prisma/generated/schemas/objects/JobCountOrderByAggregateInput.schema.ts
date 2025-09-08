import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  companyId: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  location: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  minSalary: SortOrderSchema.optional(),
  maxSalary: SortOrderSchema.optional(),
  currency: SortOrderSchema.optional(),
  payPeriod: SortOrderSchema.optional(),
  jobClass: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  summary: SortOrderSchema.optional(),
  qualifications: SortOrderSchema.optional(),
  responsibilities: SortOrderSchema.optional(),
  benefits: SortOrderSchema.optional(),
  tags: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const JobCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.JobCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.JobCountOrderByAggregateInput>;
export const JobCountOrderByAggregateInputObjectZodSchema = makeSchema();
