import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const CompanyMemberOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.CompanyMemberOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberOrderByRelationAggregateInput>;
export const CompanyMemberOrderByRelationAggregateInputObjectZodSchema = makeSchema();
