import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EducationSelectObjectSchema } from './EducationSelect.schema';
import { EducationIncludeObjectSchema } from './EducationInclude.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  select: z.lazy(() => EducationSelectObjectSchema).optional(),
  include: z.lazy(() => EducationIncludeObjectSchema).optional()
}).strict();
export const EducationArgsObjectSchema = makeSchema();
export const EducationArgsObjectZodSchema = makeSchema();
