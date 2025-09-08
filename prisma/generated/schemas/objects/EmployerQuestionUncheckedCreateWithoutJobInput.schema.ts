import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionTypeSchema } from '../enums/QuestionType.schema';
import { EmployerQuestionCreateoptionsInputObjectSchema } from './EmployerQuestionCreateoptionsInput.schema';
import { AnswerUncheckedCreateNestedManyWithoutQuestionInputObjectSchema } from './AnswerUncheckedCreateNestedManyWithoutQuestionInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  text: z.string(),
  type: QuestionTypeSchema,
  isRequired: z.boolean().optional(),
  options: z.union([z.lazy(() => EmployerQuestionCreateoptionsInputObjectSchema), z.string().array()]).optional(),
  answers: z.lazy(() => AnswerUncheckedCreateNestedManyWithoutQuestionInputObjectSchema).optional()
}).strict();
export const EmployerQuestionUncheckedCreateWithoutJobInputObjectSchema: z.ZodType<Prisma.EmployerQuestionUncheckedCreateWithoutJobInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionUncheckedCreateWithoutJobInput>;
export const EmployerQuestionUncheckedCreateWithoutJobInputObjectZodSchema = makeSchema();
