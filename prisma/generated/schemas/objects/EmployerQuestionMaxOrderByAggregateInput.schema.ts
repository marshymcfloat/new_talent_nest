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
export const EmployerQuestionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EmployerQuestionMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionMaxOrderByAggregateInput>;
export const EmployerQuestionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
