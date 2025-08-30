import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  course: SortOrderSchema.optional(),
  institution: SortOrderSchema.optional(),
  dateStarted: SortOrderSchema.optional(),
  dateEnded: SortOrderSchema.optional(),
  highlight: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const EducationMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EducationMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EducationMinOrderByAggregateInput>;
export const EducationMinOrderByAggregateInputObjectZodSchema = makeSchema();
