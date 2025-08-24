import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobSelectObjectSchema } from './JobSelect.schema';
import { JobIncludeObjectSchema } from './JobInclude.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  select: z.lazy(() => JobSelectObjectSchema).optional(),
  include: z.lazy(() => JobIncludeObjectSchema).optional()
}).strict();
export const JobArgsObjectSchema = makeSchema();
export const JobArgsObjectZodSchema = makeSchema();
