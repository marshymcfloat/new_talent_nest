import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResumeCountOutputTypeSelectObjectSchema } from './ResumeCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ResumeCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ResumeCountOutputTypeArgsObjectSchema = makeSchema();
export const ResumeCountOutputTypeArgsObjectZodSchema = makeSchema();
