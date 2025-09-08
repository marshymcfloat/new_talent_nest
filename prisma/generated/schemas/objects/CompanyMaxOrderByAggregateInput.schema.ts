import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  websiteUrl: SortOrderSchema.optional(),
  logoUrl: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const CompanyMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CompanyMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMaxOrderByAggregateInput>;
export const CompanyMaxOrderByAggregateInputObjectZodSchema = makeSchema();
