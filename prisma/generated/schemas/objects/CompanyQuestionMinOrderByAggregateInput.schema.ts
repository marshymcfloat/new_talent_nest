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
export const CompanyQuestionMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CompanyQuestionMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionMinOrderByAggregateInput>;
export const CompanyQuestionMinOrderByAggregateInputObjectZodSchema = makeSchema();
