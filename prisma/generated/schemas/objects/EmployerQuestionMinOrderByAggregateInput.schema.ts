import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  text: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  isRequired: SortOrderSchema.optional(),
  jobId: SortOrderSchema.optional()
}).strict();
export const EmployerQuestionMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EmployerQuestionMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionMinOrderByAggregateInput>;
export const EmployerQuestionMinOrderByAggregateInputObjectZodSchema = makeSchema();
