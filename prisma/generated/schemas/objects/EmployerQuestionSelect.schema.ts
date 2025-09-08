import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobArgsObjectSchema } from './JobArgs.schema';
import { AnswerFindManySchema } from '../findManyAnswer.schema';
import { EmployerQuestionCountOutputTypeArgsObjectSchema } from './EmployerQuestionCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  text: z.boolean().optional(),
  type: z.boolean().optional(),
  isRequired: z.boolean().optional(),
  options: z.boolean().optional(),
  jobId: z.boolean().optional(),
  Job: z.union([z.boolean(), z.lazy(() => JobArgsObjectSchema)]).optional(),
  answers: z.union([z.boolean(), z.lazy(() => AnswerFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EmployerQuestionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const EmployerQuestionSelectObjectSchema: z.ZodType<Prisma.EmployerQuestionSelect> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionSelect>;
export const EmployerQuestionSelectObjectZodSchema = makeSchema();
