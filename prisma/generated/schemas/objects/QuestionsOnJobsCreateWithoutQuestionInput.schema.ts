import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobCreateNestedOneWithoutQuestionsInputObjectSchema } from './JobCreateNestedOneWithoutQuestionsInput.schema'

const makeSchema = () => z.object({
  isRequired: z.boolean().optional(),
  sortOrder: z.number().int().optional().nullable(),
  job: z.lazy(() => JobCreateNestedOneWithoutQuestionsInputObjectSchema)
}).strict();
export const QuestionsOnJobsCreateWithoutQuestionInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsCreateWithoutQuestionInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsCreateWithoutQuestionInput>;
export const QuestionsOnJobsCreateWithoutQuestionInputObjectZodSchema = makeSchema();
