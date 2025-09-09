import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CompanyOrderByWithRelationInputObjectSchema } from './CompanyOrderByWithRelationInput.schema';
import { QuestionsOnJobsOrderByRelationAggregateInputObjectSchema } from './QuestionsOnJobsOrderByRelationAggregateInput.schema';
import { AnswerOrderByRelationAggregateInputObjectSchema } from './AnswerOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  text: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  options: SortOrderSchema.optional(),
  companyId: SortOrderSchema.optional(),
  isArchived: SortOrderSchema.optional(),
  company: z.lazy(() => CompanyOrderByWithRelationInputObjectSchema).optional(),
  jobs: z.lazy(() => QuestionsOnJobsOrderByRelationAggregateInputObjectSchema).optional(),
  answers: z.lazy(() => AnswerOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const CompanyQuestionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CompanyQuestionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionOrderByWithRelationInput>;
export const CompanyQuestionOrderByWithRelationInputObjectZodSchema = makeSchema();
