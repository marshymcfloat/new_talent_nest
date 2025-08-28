import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { EmployerQuestionCountOrderByAggregateInputObjectSchema } from './EmployerQuestionCountOrderByAggregateInput.schema';
import { EmployerQuestionMaxOrderByAggregateInputObjectSchema } from './EmployerQuestionMaxOrderByAggregateInput.schema';
import { EmployerQuestionMinOrderByAggregateInputObjectSchema } from './EmployerQuestionMinOrderByAggregateInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  text: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  isRequired: SortOrderSchema.optional(),
  options: SortOrderSchema.optional(),
  jobId: SortOrderSchema.optional(),
  _count: z.lazy(() => EmployerQuestionCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => EmployerQuestionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => EmployerQuestionMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const EmployerQuestionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.EmployerQuestionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionOrderByWithAggregationInput>;
export const EmployerQuestionOrderByWithAggregationInputObjectZodSchema = makeSchema();
