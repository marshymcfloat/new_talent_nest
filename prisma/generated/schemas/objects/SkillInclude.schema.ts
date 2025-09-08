import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserFindManySchema } from '../findManyUser.schema';
import { SkillCountOutputTypeArgsObjectSchema } from './SkillCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SkillCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const SkillIncludeObjectSchema: z.ZodType<Prisma.SkillInclude> = makeSchema() as unknown as z.ZodType<Prisma.SkillInclude>;
export const SkillIncludeObjectZodSchema = makeSchema();
