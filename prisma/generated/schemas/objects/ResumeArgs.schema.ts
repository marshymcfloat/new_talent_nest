import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResumeSelectObjectSchema } from './ResumeSelect.schema';
import { ResumeIncludeObjectSchema } from './ResumeInclude.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  select: z.lazy(() => ResumeSelectObjectSchema).optional(),
  include: z.lazy(() => ResumeIncludeObjectSchema).optional()
}).strict();
export const ResumeArgsObjectSchema = makeSchema();
export const ResumeArgsObjectZodSchema = makeSchema();
