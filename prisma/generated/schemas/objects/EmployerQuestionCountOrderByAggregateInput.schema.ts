import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  text: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  isRequired: SortOrderSchema.optional(),
  options: SortOrderSchema.optional(),
  jobId: SortOrderSchema.optional()
}).strict();
export const EmployerQuestionCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EmployerQuestionCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionCountOrderByAggregateInput>;
export const EmployerQuestionCountOrderByAggregateInputObjectZodSchema = makeSchema();
