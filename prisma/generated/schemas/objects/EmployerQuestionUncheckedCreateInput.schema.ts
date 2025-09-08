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
  options: z.union([z.lazy(() => EmployerQuestionCreateoptionsInputObjectSchema), z.string().array()]),
  jobId: z.string(),
  answers: z.lazy(() => AnswerUncheckedCreateNestedManyWithoutQuestionInputObjectSchema)
}).strict();
export const EmployerQuestionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.EmployerQuestionUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionUncheckedCreateInput>;
export const EmployerQuestionUncheckedCreateInputObjectZodSchema = makeSchema();
