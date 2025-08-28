import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionTypeSchema } from '../enums/QuestionType.schema';
import { EmployerQuestionCreateoptionsInputObjectSchema } from './EmployerQuestionCreateoptionsInput.schema';
import { JobCreateNestedOneWithoutEmployerQuestionsInputObjectSchema } from './JobCreateNestedOneWithoutEmployerQuestionsInput.schema';
import { AnswerCreateNestedManyWithoutQuestionInputObjectSchema } from './AnswerCreateNestedManyWithoutQuestionInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  text: z.string(),
  type: QuestionTypeSchema,
  isRequired: z.boolean().optional(),
  options: z.union([z.lazy(() => EmployerQuestionCreateoptionsInputObjectSchema), z.string().array()]).optional(),
  Job: z.lazy(() => JobCreateNestedOneWithoutEmployerQuestionsInputObjectSchema),
  answers: z.lazy(() => AnswerCreateNestedManyWithoutQuestionInputObjectSchema).optional()
}).strict();
export const EmployerQuestionCreateInputObjectSchema: z.ZodType<Prisma.EmployerQuestionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionCreateInput>;
export const EmployerQuestionCreateInputObjectZodSchema = makeSchema();
