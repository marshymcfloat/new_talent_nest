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
  JobClass: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const JobCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.JobCountOrderByAggregateInput> = makeSchema();
export const JobCountOrderByAggregateInputObjectZodSchema = makeSchema();
