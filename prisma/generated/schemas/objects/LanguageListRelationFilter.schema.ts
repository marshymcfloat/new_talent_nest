import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LanguageWhereInputObjectSchema } from './LanguageWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => LanguageWhereInputObjectSchema).optional(),
  some: z.lazy(() => LanguageWhereInputObjectSchema).optional(),
  none: z.lazy(() => LanguageWhereInputObjectSchema).optional()
}).strict();
export const LanguageListRelationFilterObjectSchema: z.ZodType<Prisma.LanguageListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.LanguageListRelationFilter>;
export const LanguageListRelationFilterObjectZodSchema = makeSchema();
