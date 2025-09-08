import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionTypeSchema } from '../enums/QuestionType.schema';
import { EmployerQuestionCreateoptionsInputObjectSchema } from './EmployerQuestionCreateoptionsInput.schema';
import { AnswerCreateNestedManyWithoutQuestionInputObjectSchema } from './AnswerCreateNestedManyWithoutQuestionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  text: z.string(),
  type: QuestionTypeSchema,
  isRequired: z.boolean().optional(),
  options: z.union([z.lazy(() => EmployerQuestionCreateoptionsInputObjectSchema), z.string().array()]).optional(),
  answers: z.lazy(() => AnswerCreateNestedManyWithoutQuestionInputObjectSchema).optional()
}).strict();
export const EmployerQuestionCreateWithoutJobInputObjectSchema: z.ZodType<Prisma.EmployerQuestionCreateWithoutJobInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionCreateWithoutJobInput>;
export const EmployerQuestionCreateWithoutJobInputObjectZodSchema = makeSchema();
