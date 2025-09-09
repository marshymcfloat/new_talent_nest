import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionTypeSchema } from '../enums/QuestionType.schema';
import { CompanyQuestionCreateoptionsInputObjectSchema } from './CompanyQuestionCreateoptionsInput.schema';
import { CompanyCreateNestedOneWithoutQuestionsInputObjectSchema } from './CompanyCreateNestedOneWithoutQuestionsInput.schema';
import { AnswerCreateNestedManyWithoutQuestionInputObjectSchema } from './AnswerCreateNestedManyWithoutQuestionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  text: z.string(),
  type: QuestionTypeSchema,
  options: z.union([z.lazy(() => CompanyQuestionCreateoptionsInputObjectSchema), z.string().array()]).optional(),
  isArchived: z.boolean().optional(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutQuestionsInputObjectSchema),
  answers: z.lazy(() => AnswerCreateNestedManyWithoutQuestionInputObjectSchema).optional()
}).strict();
export const CompanyQuestionCreateWithoutJobsInputObjectSchema: z.ZodType<Prisma.CompanyQuestionCreateWithoutJobsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionCreateWithoutJobsInput>;
export const CompanyQuestionCreateWithoutJobsInputObjectZodSchema = makeSchema();
