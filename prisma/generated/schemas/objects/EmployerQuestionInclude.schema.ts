import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobArgsObjectSchema } from './JobArgs.schema';
import { AnswerFindManySchema } from '../findManyAnswer.schema';
import { EmployerQuestionCountOutputTypeArgsObjectSchema } from './EmployerQuestionCountOutputTypeArgs.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  Job: z.union([z.boolean(), z.lazy(() => JobArgsObjectSchema)]).optional(),
  answers: z.union([z.boolean(), z.lazy(() => AnswerFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EmployerQuestionCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const EmployerQuestionIncludeObjectSchema: z.ZodType<Prisma.EmployerQuestionInclude> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionInclude>;
export const EmployerQuestionIncludeObjectZodSchema = makeSchema();
