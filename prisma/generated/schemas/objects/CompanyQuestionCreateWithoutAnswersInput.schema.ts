import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionTypeSchema } from '../enums/QuestionType.schema';
import { CompanyQuestionCreateoptionsInputObjectSchema } from './CompanyQuestionCreateoptionsInput.schema';
import { CompanyCreateNestedOneWithoutQuestionsInputObjectSchema } from './CompanyCreateNestedOneWithoutQuestionsInput.schema';
import { QuestionsOnJobsCreateNestedManyWithoutQuestionInputObjectSchema } from './QuestionsOnJobsCreateNestedManyWithoutQuestionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  text: z.string(),
  type: QuestionTypeSchema,
  options: z.union([z.lazy(() => CompanyQuestionCreateoptionsInputObjectSchema), z.string().array()]).optional(),
  isArchived: z.boolean().optional(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutQuestionsInputObjectSchema),
  jobs: z.lazy(() => QuestionsOnJobsCreateNestedManyWithoutQuestionInputObjectSchema).optional()
}).strict();
export const CompanyQuestionCreateWithoutAnswersInputObjectSchema: z.ZodType<Prisma.CompanyQuestionCreateWithoutAnswersInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionCreateWithoutAnswersInput>;
export const CompanyQuestionCreateWithoutAnswersInputObjectZodSchema = makeSchema();
