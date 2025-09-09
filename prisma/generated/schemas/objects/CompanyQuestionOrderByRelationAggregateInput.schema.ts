import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const CompanyQuestionOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.CompanyQuestionOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionOrderByRelationAggregateInput>;
export const CompanyQuestionOrderByRelationAggregateInputObjectZodSchema = makeSchema();
