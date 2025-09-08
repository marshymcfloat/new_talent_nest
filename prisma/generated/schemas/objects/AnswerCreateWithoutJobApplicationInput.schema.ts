import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EmployerQuestionCreateNestedOneWithoutAnswersInputObjectSchema } from './EmployerQuestionCreateNestedOneWithoutAnswersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  text: z.string(),
  Question: z.lazy(() => EmployerQuestionCreateNestedOneWithoutAnswersInputObjectSchema)
}).strict();
export const AnswerCreateWithoutJobApplicationInputObjectSchema: z.ZodType<Prisma.AnswerCreateWithoutJobApplicationInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerCreateWithoutJobApplicationInput>;
export const AnswerCreateWithoutJobApplicationInputObjectZodSchema = makeSchema();
