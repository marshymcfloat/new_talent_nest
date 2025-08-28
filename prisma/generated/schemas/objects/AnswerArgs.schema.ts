import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnswerSelectObjectSchema } from './AnswerSelect.schema';
import { AnswerIncludeObjectSchema } from './AnswerInclude.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  select: z.lazy(() => AnswerSelectObjectSchema).optional(),
  include: z.lazy(() => AnswerIncludeObjectSchema).optional()
}).strict();
export const AnswerArgsObjectSchema = makeSchema();
export const AnswerArgsObjectZodSchema = makeSchema();
