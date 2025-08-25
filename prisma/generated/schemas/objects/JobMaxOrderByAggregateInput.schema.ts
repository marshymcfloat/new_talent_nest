import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  company: SortOrderSchema.optional(),
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
export const JobMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.JobMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.JobMaxOrderByAggregateInput>;
export const JobMaxOrderByAggregateInputObjectZodSchema = makeSchema();
