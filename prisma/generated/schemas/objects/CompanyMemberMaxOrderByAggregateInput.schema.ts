import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  userId: SortOrderSchema.optional(),
  companyId: SortOrderSchema.optional(),
  role: SortOrderSchema.optional()
}).strict();
export const CompanyMemberMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CompanyMemberMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberMaxOrderByAggregateInput>;
export const CompanyMemberMaxOrderByAggregateInputObjectZodSchema = makeSchema();
