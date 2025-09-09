import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { JobOrderByWithRelationInputObjectSchema } from './JobOrderByWithRelationInput.schema';
import { CompanyQuestionOrderByWithRelationInputObjectSchema } from './CompanyQuestionOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  jobId: SortOrderSchema.optional(),
  questionId: SortOrderSchema.optional(),
  isRequired: SortOrderSchema.optional(),
  sortOrder: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  job: z.lazy(() => JobOrderByWithRelationInputObjectSchema).optional(),
  question: z.lazy(() => CompanyQuestionOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const QuestionsOnJobsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsOrderByWithRelationInput>;
export const QuestionsOnJobsOrderByWithRelationInputObjectZodSchema = makeSchema();
