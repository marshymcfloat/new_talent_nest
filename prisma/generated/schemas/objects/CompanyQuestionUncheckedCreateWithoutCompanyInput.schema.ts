import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionTypeSchema } from '../enums/QuestionType.schema';
import { CompanyQuestionCreateoptionsInputObjectSchema } from './CompanyQuestionCreateoptionsInput.schema';
import { QuestionsOnJobsUncheckedCreateNestedManyWithoutQuestionInputObjectSchema } from './QuestionsOnJobsUncheckedCreateNestedManyWithoutQuestionInput.schema';
import { AnswerUncheckedCreateNestedManyWithoutQuestionInputObjectSchema } from './AnswerUncheckedCreateNestedManyWithoutQuestionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  text: z.string(),
  type: QuestionTypeSchema,
  options: z.union([z.lazy(() => CompanyQuestionCreateoptionsInputObjectSchema), z.string().array()]).optional(),
  isArchived: z.boolean().optional(),
  jobs: z.lazy(() => QuestionsOnJobsUncheckedCreateNestedManyWithoutQuestionInputObjectSchema).optional(),
  answers: z.lazy(() => AnswerUncheckedCreateNestedManyWithoutQuestionInputObjectSchema).optional()
}).strict();
export const CompanyQuestionUncheckedCreateWithoutCompanyInputObjectSchema: z.ZodType<Prisma.CompanyQuestionUncheckedCreateWithoutCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionUncheckedCreateWithoutCompanyInput>;
export const CompanyQuestionUncheckedCreateWithoutCompanyInputObjectZodSchema = makeSchema();
