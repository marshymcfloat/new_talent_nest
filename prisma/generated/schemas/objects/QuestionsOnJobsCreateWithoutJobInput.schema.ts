import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyQuestionCreateNestedOneWithoutJobsInputObjectSchema } from './CompanyQuestionCreateNestedOneWithoutJobsInput.schema'

const makeSchema = () => z.object({
  isRequired: z.boolean().optional(),
  sortOrder: z.number().int().optional().nullable(),
  question: z.lazy(() => CompanyQuestionCreateNestedOneWithoutJobsInputObjectSchema)
}).strict();
export const QuestionsOnJobsCreateWithoutJobInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsCreateWithoutJobInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsCreateWithoutJobInput>;
export const QuestionsOnJobsCreateWithoutJobInputObjectZodSchema = makeSchema();
