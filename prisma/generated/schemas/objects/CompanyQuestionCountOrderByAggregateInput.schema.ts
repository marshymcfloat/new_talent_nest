import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  text: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  options: SortOrderSchema.optional(),
  companyId: SortOrderSchema.optional(),
  isArchived: SortOrderSchema.optional()
}).strict();
export const CompanyQuestionCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CompanyQuestionCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionCountOrderByAggregateInput>;
export const CompanyQuestionCountOrderByAggregateInputObjectZodSchema = makeSchema();
