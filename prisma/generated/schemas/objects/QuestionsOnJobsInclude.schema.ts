import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobArgsObjectSchema } from './JobArgs.schema';
import { CompanyQuestionArgsObjectSchema } from './CompanyQuestionArgs.schema'

const makeSchema = () => z.object({
  job: z.union([z.boolean(), z.lazy(() => JobArgsObjectSchema)]).optional(),
  question: z.union([z.boolean(), z.lazy(() => CompanyQuestionArgsObjectSchema)]).optional()
}).strict();
export const QuestionsOnJobsIncludeObjectSchema: z.ZodType<Prisma.QuestionsOnJobsInclude> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsInclude>;
export const QuestionsOnJobsIncludeObjectZodSchema = makeSchema();
