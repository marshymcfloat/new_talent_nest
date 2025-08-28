import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EmployerQuestionCountOutputTypeSelectObjectSchema } from './EmployerQuestionCountOutputTypeSelect.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  select: z.lazy(() => EmployerQuestionCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const EmployerQuestionCountOutputTypeArgsObjectSchema = makeSchema();
export const EmployerQuestionCountOutputTypeArgsObjectZodSchema = makeSchema();
