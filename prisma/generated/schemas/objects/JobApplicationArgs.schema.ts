import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationSelectObjectSchema } from './JobApplicationSelect.schema';
import { JobApplicationIncludeObjectSchema } from './JobApplicationInclude.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  select: z.lazy(() => JobApplicationSelectObjectSchema).optional(),
  include: z.lazy(() => JobApplicationIncludeObjectSchema).optional()
}).strict();
export const JobApplicationArgsObjectSchema = makeSchema();
export const JobApplicationArgsObjectZodSchema = makeSchema();
