import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  companyId: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  location: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  salary: SortOrderSchema.optional(),
  jobClass: SortOrderSchema.optional(),
  summary: SortOrderSchema.optional(),
  qualifications: SortOrderSchema.optional(),
  responsibilities: SortOrderSchema.optional(),
  benefits: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const JobMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.JobMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.JobMinOrderByAggregateInput>;
export const JobMinOrderByAggregateInputObjectZodSchema = makeSchema();
