import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionTypeSchema } from '../enums/QuestionType.schema';
import { CompanyQuestionCreateoptionsInputObjectSchema } from './CompanyQuestionCreateoptionsInput.schema';
import { CompanyCreateNestedOneWithoutQuestionsInputObjectSchema } from './CompanyCreateNestedOneWithoutQuestionsInput.schema';
import { QuestionsOnJobsCreateNestedManyWithoutQuestionInputObjectSchema } from './QuestionsOnJobsCreateNestedManyWithoutQuestionInput.schema';
import { AnswerCreateNestedManyWithoutQuestionInputObjectSchema } from './AnswerCreateNestedManyWithoutQuestionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  text: z.string(),
  type: QuestionTypeSchema,
  options: z.union([z.lazy(() => CompanyQuestionCreateoptionsInputObjectSchema), z.string().array()]),
  isArchived: z.boolean().optional(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutQuestionsInputObjectSchema),
  jobs: z.lazy(() => QuestionsOnJobsCreateNestedManyWithoutQuestionInputObjectSchema),
  answers: z.lazy(() => AnswerCreateNestedManyWithoutQuestionInputObjectSchema)
}).strict();
export const CompanyQuestionCreateInputObjectSchema: z.ZodType<Prisma.CompanyQuestionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionCreateInput>;
export const CompanyQuestionCreateInputObjectZodSchema = makeSchema();
