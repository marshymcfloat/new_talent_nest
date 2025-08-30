import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillSelectObjectSchema } from './SkillSelect.schema';
import { SkillIncludeObjectSchema } from './SkillInclude.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  select: z.lazy(() => SkillSelectObjectSchema).optional(),
  include: z.lazy(() => SkillIncludeObjectSchema).optional()
}).strict();
export const SkillArgsObjectSchema = makeSchema();
export const SkillArgsObjectZodSchema = makeSchema();
