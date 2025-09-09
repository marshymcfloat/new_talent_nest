import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobCreateNestedOneWithoutQuestionsInputObjectSchema } from './JobCreateNestedOneWithoutQuestionsInput.schema';
import { CompanyQuestionCreateNestedOneWithoutJobsInputObjectSchema } from './CompanyQuestionCreateNestedOneWithoutJobsInput.schema'

const makeSchema = () => z.object({
  isRequired: z.boolean().optional(),
  sortOrder: z.number().int().optional().nullable(),
  job: z.lazy(() => JobCreateNestedOneWithoutQuestionsInputObjectSchema),
  question: z.lazy(() => CompanyQuestionCreateNestedOneWithoutJobsInputObjectSchema)
}).strict();
export const QuestionsOnJobsCreateInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsCreateInput>;
export const QuestionsOnJobsCreateInputObjectZodSchema = makeSchema();
