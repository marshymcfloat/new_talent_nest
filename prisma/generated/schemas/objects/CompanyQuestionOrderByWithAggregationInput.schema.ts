import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CompanyQuestionCountOrderByAggregateInputObjectSchema } from './CompanyQuestionCountOrderByAggregateInput.schema';
import { CompanyQuestionMaxOrderByAggregateInputObjectSchema } from './CompanyQuestionMaxOrderByAggregateInput.schema';
import { CompanyQuestionMinOrderByAggregateInputObjectSchema } from './CompanyQuestionMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  text: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  options: SortOrderSchema.optional(),
  companyId: SortOrderSchema.optional(),
  isArchived: SortOrderSchema.optional(),
  _count: z.lazy(() => CompanyQuestionCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CompanyQuestionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CompanyQuestionMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CompanyQuestionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CompanyQuestionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionOrderByWithAggregationInput>;
export const CompanyQuestionOrderByWithAggregationInputObjectZodSchema = makeSchema();
