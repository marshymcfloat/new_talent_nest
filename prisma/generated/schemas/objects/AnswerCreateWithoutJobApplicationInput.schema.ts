import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyQuestionCreateNestedOneWithoutAnswersInputObjectSchema } from './CompanyQuestionCreateNestedOneWithoutAnswersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  text: z.string(),
  Question: z.lazy(() => CompanyQuestionCreateNestedOneWithoutAnswersInputObjectSchema)
}).strict();
export const AnswerCreateWithoutJobApplicationInputObjectSchema: z.ZodType<Prisma.AnswerCreateWithoutJobApplicationInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerCreateWithoutJobApplicationInput>;
export const AnswerCreateWithoutJobApplicationInputObjectZodSchema = makeSchema();
