import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  userId: SortOrderSchema.optional(),
  companyId: SortOrderSchema.optional(),
  role: SortOrderSchema.optional()
}).strict();
export const CompanyMemberMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CompanyMemberMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberMinOrderByAggregateInput>;
export const CompanyMemberMinOrderByAggregateInputObjectZodSchema = makeSchema();
