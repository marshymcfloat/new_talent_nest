import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionsOnJobsSelectObjectSchema } from './QuestionsOnJobsSelect.schema';
import { QuestionsOnJobsIncludeObjectSchema } from './QuestionsOnJobsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => QuestionsOnJobsSelectObjectSchema).optional(),
  include: z.lazy(() => QuestionsOnJobsIncludeObjectSchema).optional()
}).strict();
export const QuestionsOnJobsArgsObjectSchema = makeSchema();
export const QuestionsOnJobsArgsObjectZodSchema = makeSchema();
