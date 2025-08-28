import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { JobOrderByWithRelationInputObjectSchema } from './JobOrderByWithRelationInput.schema';
import { AnswerOrderByRelationAggregateInputObjectSchema } from './AnswerOrderByRelationAggregateInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  text: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  isRequired: SortOrderSchema.optional(),
  options: SortOrderSchema.optional(),
  jobId: SortOrderSchema.optional(),
  Job: z.lazy(() => JobOrderByWithRelationInputObjectSchema).optional(),
  answers: z.lazy(() => AnswerOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const EmployerQuestionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.EmployerQuestionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionOrderByWithRelationInput>;
export const EmployerQuestionOrderByWithRelationInputObjectZodSchema = makeSchema();
