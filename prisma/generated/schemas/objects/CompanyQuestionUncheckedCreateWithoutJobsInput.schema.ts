import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionTypeSchema } from '../enums/QuestionType.schema';
import { CompanyQuestionCreateoptionsInputObjectSchema } from './CompanyQuestionCreateoptionsInput.schema';
import { AnswerUncheckedCreateNestedManyWithoutQuestionInputObjectSchema } from './AnswerUncheckedCreateNestedManyWithoutQuestionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  text: z.string(),
  type: QuestionTypeSchema,
  options: z.union([z.lazy(() => CompanyQuestionCreateoptionsInputObjectSchema), z.string().array()]).optional(),
  companyId: z.string(),
  isArchived: z.boolean().optional(),
  answers: z.lazy(() => AnswerUncheckedCreateNestedManyWithoutQuestionInputObjectSchema).optional()
}).strict();
export const CompanyQuestionUncheckedCreateWithoutJobsInputObjectSchema: z.ZodType<Prisma.CompanyQuestionUncheckedCreateWithoutJobsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionUncheckedCreateWithoutJobsInput>;
export const CompanyQuestionUncheckedCreateWithoutJobsInputObjectZodSchema = makeSchema();
