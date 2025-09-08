import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EmployerQuestionSelectObjectSchema } from './EmployerQuestionSelect.schema';
import { EmployerQuestionIncludeObjectSchema } from './EmployerQuestionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => EmployerQuestionSelectObjectSchema).optional(),
  include: z.lazy(() => EmployerQuestionIncludeObjectSchema).optional()
}).strict();
export const EmployerQuestionArgsObjectSchema = makeSchema();
export const EmployerQuestionArgsObjectZodSchema = makeSchema();
