import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationCountOutputTypeSelectObjectSchema } from './JobApplicationCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => JobApplicationCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const JobApplicationCountOutputTypeArgsObjectSchema = makeSchema();
export const JobApplicationCountOutputTypeArgsObjectZodSchema = makeSchema();
