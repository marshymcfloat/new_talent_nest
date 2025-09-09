import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { JobApplicationOrderByWithRelationInputObjectSchema } from './JobApplicationOrderByWithRelationInput.schema';
import { CompanyQuestionOrderByWithRelationInputObjectSchema } from './CompanyQuestionOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  text: SortOrderSchema.optional(),
  jobApplicationId: SortOrderSchema.optional(),
  questionId: SortOrderSchema.optional(),
  JobApplication: z.lazy(() => JobApplicationOrderByWithRelationInputObjectSchema).optional(),
  Question: z.lazy(() => CompanyQuestionOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AnswerOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AnswerOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerOrderByWithRelationInput>;
export const AnswerOrderByWithRelationInputObjectZodSchema = makeSchema();
