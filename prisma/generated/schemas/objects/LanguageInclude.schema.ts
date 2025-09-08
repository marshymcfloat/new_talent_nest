import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserFindManySchema } from '../findManyUser.schema';
import { LanguageCountOutputTypeArgsObjectSchema } from './LanguageCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => LanguageCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const LanguageIncludeObjectSchema: z.ZodType<Prisma.LanguageInclude> = makeSchema() as unknown as z.ZodType<Prisma.LanguageInclude>;
export const LanguageIncludeObjectZodSchema = makeSchema();
