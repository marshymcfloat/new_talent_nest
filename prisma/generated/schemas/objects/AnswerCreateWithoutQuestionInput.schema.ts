import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationCreateNestedOneWithoutAnswersInputObjectSchema } from './JobApplicationCreateNestedOneWithoutAnswersInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  text: z.string(),
  JobApplication: z.lazy(() => JobApplicationCreateNestedOneWithoutAnswersInputObjectSchema)
}).strict();
export const AnswerCreateWithoutQuestionInputObjectSchema: z.ZodType<Prisma.AnswerCreateWithoutQuestionInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerCreateWithoutQuestionInput>;
export const AnswerCreateWithoutQuestionInputObjectZodSchema = makeSchema();
