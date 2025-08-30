import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LanguageCountOutputTypeSelectObjectSchema } from './LanguageCountOutputTypeSelect.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  select: z.lazy(() => LanguageCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const LanguageCountOutputTypeArgsObjectSchema = makeSchema();
export const LanguageCountOutputTypeArgsObjectZodSchema = makeSchema();
