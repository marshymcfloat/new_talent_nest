import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CompanyCountOrderByAggregateInputObjectSchema } from './CompanyCountOrderByAggregateInput.schema';
import { CompanyMaxOrderByAggregateInputObjectSchema } from './CompanyMaxOrderByAggregateInput.schema';
import { CompanyMinOrderByAggregateInputObjectSchema } from './CompanyMinOrderByAggregateInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  websiteUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  logoUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  verifiedDomains: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => CompanyCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CompanyMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CompanyMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CompanyOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CompanyOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyOrderByWithAggregationInput>;
export const CompanyOrderByWithAggregationInputObjectZodSchema = makeSchema();
