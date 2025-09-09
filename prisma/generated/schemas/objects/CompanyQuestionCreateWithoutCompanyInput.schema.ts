import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionTypeSchema } from '../enums/QuestionType.schema';
import { CompanyQuestionCreateoptionsInputObjectSchema } from './CompanyQuestionCreateoptionsInput.schema';
import { QuestionsOnJobsCreateNestedManyWithoutQuestionInputObjectSchema } from './QuestionsOnJobsCreateNestedManyWithoutQuestionInput.schema';
import { AnswerCreateNestedManyWithoutQuestionInputObjectSchema } from './AnswerCreateNestedManyWithoutQuestionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  text: z.string(),
  type: QuestionTypeSchema,
  options: z.union([z.lazy(() => CompanyQuestionCreateoptionsInputObjectSchema), z.string().array()]).optional(),
  isArchived: z.boolean().optional(),
  jobs: z.lazy(() => QuestionsOnJobsCreateNestedManyWithoutQuestionInputObjectSchema).optional(),
  answers: z.lazy(() => AnswerCreateNestedManyWithoutQuestionInputObjectSchema).optional()
}).strict();
export const CompanyQuestionCreateWithoutCompanyInputObjectSchema: z.ZodType<Prisma.CompanyQuestionCreateWithoutCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionCreateWithoutCompanyInput>;
export const CompanyQuestionCreateWithoutCompanyInputObjectZodSchema = makeSchema();
