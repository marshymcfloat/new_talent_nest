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
  options: z.union([z.lazy(() => CompanyQuestionCreateoptionsInputObjectSchema), z.string().array()]),
  companyId: z.string(),
  isArchived: z.boolean().optional(),
  jobs: z.lazy(() => QuestionsOnJobsUncheckedCreateNestedManyWithoutQuestionInputObjectSchema),
  answers: z.lazy(() => AnswerUncheckedCreateNestedManyWithoutQuestionInputObjectSchema)
}).strict();
export const CompanyQuestionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CompanyQuestionUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionUncheckedCreateInput>;
export const CompanyQuestionUncheckedCreateInputObjectZodSchema = makeSchema();
