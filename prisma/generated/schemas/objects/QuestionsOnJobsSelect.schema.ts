import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobArgsObjectSchema } from './JobArgs.schema';
import { CompanyQuestionArgsObjectSchema } from './CompanyQuestionArgs.schema'

const makeSchema = () => z.object({
  jobId: z.boolean().optional(),
  questionId: z.boolean().optional(),
  job: z.union([z.boolean(), z.lazy(() => JobArgsObjectSchema)]).optional(),
  question: z.union([z.boolean(), z.lazy(() => CompanyQuestionArgsObjectSchema)]).optional(),
  isRequired: z.boolean().optional(),
  sortOrder: z.boolean().optional()
}).strict();
export const QuestionsOnJobsSelectObjectSchema: z.ZodType<Prisma.QuestionsOnJobsSelect> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsSelect>;
export const QuestionsOnJobsSelectObjectZodSchema = makeSchema();
