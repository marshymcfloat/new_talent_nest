import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationArgsObjectSchema } from './JobApplicationArgs.schema';
import { EmployerQuestionArgsObjectSchema } from './EmployerQuestionArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  text: z.boolean().optional(),
  jobApplicationId: z.boolean().optional(),
  JobApplication: z.union([z.boolean(), z.lazy(() => JobApplicationArgsObjectSchema)]).optional(),
  questionId: z.boolean().optional(),
  Question: z.union([z.boolean(), z.lazy(() => EmployerQuestionArgsObjectSchema)]).optional()
}).strict();
export const AnswerSelectObjectSchema: z.ZodType<Prisma.AnswerSelect> = makeSchema() as unknown as z.ZodType<Prisma.AnswerSelect>;
export const AnswerSelectObjectZodSchema = makeSchema();
