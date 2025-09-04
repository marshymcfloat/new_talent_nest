import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  websiteUrl: SortOrderSchema.optional(),
  logoUrl: SortOrderSchema.optional(),
  verifiedDomains: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const CompanyCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CompanyCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyCountOrderByAggregateInput>;
export const CompanyCountOrderByAggregateInputObjectZodSchema = makeSchema();
