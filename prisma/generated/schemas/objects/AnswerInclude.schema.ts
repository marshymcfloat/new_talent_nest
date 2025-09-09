import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationArgsObjectSchema } from './JobApplicationArgs.schema';
import { CompanyQuestionArgsObjectSchema } from './CompanyQuestionArgs.schema'

const makeSchema = () => z.object({
  JobApplication: z.union([z.boolean(), z.lazy(() => JobApplicationArgsObjectSchema)]).optional(),
  Question: z.union([z.boolean(), z.lazy(() => CompanyQuestionArgsObjectSchema)]).optional()
}).strict();
export const AnswerIncludeObjectSchema: z.ZodType<Prisma.AnswerInclude> = makeSchema() as unknown as z.ZodType<Prisma.AnswerInclude>;
export const AnswerIncludeObjectZodSchema = makeSchema();
