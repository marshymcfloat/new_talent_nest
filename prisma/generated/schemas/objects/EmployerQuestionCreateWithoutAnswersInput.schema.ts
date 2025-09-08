import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionTypeSchema } from '../enums/QuestionType.schema';
import { EmployerQuestionCreateoptionsInputObjectSchema } from './EmployerQuestionCreateoptionsInput.schema';
import { JobCreateNestedOneWithoutEmployerQuestionsInputObjectSchema } from './JobCreateNestedOneWithoutEmployerQuestionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  text: z.string(),
  type: QuestionTypeSchema,
  isRequired: z.boolean().optional(),
  options: z.union([z.lazy(() => EmployerQuestionCreateoptionsInputObjectSchema), z.string().array()]).optional(),
  Job: z.lazy(() => JobCreateNestedOneWithoutEmployerQuestionsInputObjectSchema)
}).strict();
export const EmployerQuestionCreateWithoutAnswersInputObjectSchema: z.ZodType<Prisma.EmployerQuestionCreateWithoutAnswersInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionCreateWithoutAnswersInput>;
export const EmployerQuestionCreateWithoutAnswersInputObjectZodSchema = makeSchema();
