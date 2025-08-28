import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  Title: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  isPrimary: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ResumeMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ResumeMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeMinOrderByAggregateInput>;
export const ResumeMinOrderByAggregateInputObjectZodSchema = makeSchema();
