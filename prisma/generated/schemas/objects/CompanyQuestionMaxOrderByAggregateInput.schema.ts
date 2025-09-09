import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  text: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  companyId: SortOrderSchema.optional(),
  isArchived: SortOrderSchema.optional()
}).strict();
export const CompanyQuestionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CompanyQuestionMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionMaxOrderByAggregateInput>;
export const CompanyQuestionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
