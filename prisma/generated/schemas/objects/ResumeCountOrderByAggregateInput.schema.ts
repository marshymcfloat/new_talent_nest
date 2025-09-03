import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  isPrimary: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional()
}).strict();
export const ResumeCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ResumeCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeCountOrderByAggregateInput>;
export const ResumeCountOrderByAggregateInputObjectZodSchema = makeSchema();
