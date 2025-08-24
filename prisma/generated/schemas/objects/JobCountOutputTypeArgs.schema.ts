import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobCountOutputTypeSelectObjectSchema } from './JobCountOutputTypeSelect.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  select: z.lazy(() => JobCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const JobCountOutputTypeArgsObjectSchema = makeSchema();
export const JobCountOutputTypeArgsObjectZodSchema = makeSchema();
