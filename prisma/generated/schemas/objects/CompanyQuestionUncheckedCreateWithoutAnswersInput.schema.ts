import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionTypeSchema } from '../enums/QuestionType.schema';
import { CompanyQuestionCreateoptionsInputObjectSchema } from './CompanyQuestionCreateoptionsInput.schema';
import { QuestionsOnJobsUncheckedCreateNestedManyWithoutQuestionInputObjectSchema } from './QuestionsOnJobsUncheckedCreateNestedManyWithoutQuestionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  text: z.string(),
  type: QuestionTypeSchema,
  options: z.union([z.lazy(() => CompanyQuestionCreateoptionsInputObjectSchema), z.string().array()]).optional(),
  companyId: z.string(),
  isArchived: z.boolean().optional(),
  jobs: z.lazy(() => QuestionsOnJobsUncheckedCreateNestedManyWithoutQuestionInputObjectSchema).optional()
}).strict();
export const CompanyQuestionUncheckedCreateWithoutAnswersInputObjectSchema: z.ZodType<Prisma.CompanyQuestionUncheckedCreateWithoutAnswersInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionUncheckedCreateWithoutAnswersInput>;
export const CompanyQuestionUncheckedCreateWithoutAnswersInputObjectZodSchema = makeSchema();
