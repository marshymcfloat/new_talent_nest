import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationCreateNestedOneWithoutAnswersInputObjectSchema } from './JobApplicationCreateNestedOneWithoutAnswersInput.schema';
import { CompanyQuestionCreateNestedOneWithoutAnswersInputObjectSchema } from './CompanyQuestionCreateNestedOneWithoutAnswersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  text: z.string(),
  JobApplication: z.lazy(() => JobApplicationCreateNestedOneWithoutAnswersInputObjectSchema),
  Question: z.lazy(() => CompanyQuestionCreateNestedOneWithoutAnswersInputObjectSchema)
}).strict();
export const AnswerCreateInputObjectSchema: z.ZodType<Prisma.AnswerCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerCreateInput>;
export const AnswerCreateInputObjectZodSchema = makeSchema();
