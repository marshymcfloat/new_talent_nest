import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserFindManySchema } from '../findManyUser.schema';
import { SkillCountOutputTypeArgsObjectSchema } from './SkillCountOutputTypeArgs.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SkillCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const SkillSelectObjectSchema: z.ZodType<Prisma.SkillSelect> = makeSchema() as unknown as z.ZodType<Prisma.SkillSelect>;
export const SkillSelectObjectZodSchema = makeSchema();
