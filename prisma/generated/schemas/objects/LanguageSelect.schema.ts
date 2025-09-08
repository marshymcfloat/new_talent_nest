import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserFindManySchema } from '../findManyUser.schema';
import { LanguageCountOutputTypeArgsObjectSchema } from './LanguageCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => LanguageCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const LanguageSelectObjectSchema: z.ZodType<Prisma.LanguageSelect> = makeSchema() as unknown as z.ZodType<Prisma.LanguageSelect>;
export const LanguageSelectObjectZodSchema = makeSchema();
