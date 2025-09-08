import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillCountOutputTypeSelectObjectSchema } from './SkillCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SkillCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const SkillCountOutputTypeArgsObjectSchema = makeSchema();
export const SkillCountOutputTypeArgsObjectZodSchema = makeSchema();
