import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CompanyMemberCountOrderByAggregateInputObjectSchema } from './CompanyMemberCountOrderByAggregateInput.schema';
import { CompanyMemberMaxOrderByAggregateInputObjectSchema } from './CompanyMemberMaxOrderByAggregateInput.schema';
import { CompanyMemberMinOrderByAggregateInputObjectSchema } from './CompanyMemberMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  userId: SortOrderSchema.optional(),
  companyId: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  _count: z.lazy(() => CompanyMemberCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CompanyMemberMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CompanyMemberMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CompanyMemberOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CompanyMemberOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberOrderByWithAggregationInput>;
export const CompanyMemberOrderByWithAggregationInputObjectZodSchema = makeSchema();
