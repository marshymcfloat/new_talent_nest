import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => LanguageScalarWhereInputObjectSchema), z.lazy(() => LanguageScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LanguageScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LanguageScalarWhereInputObjectSchema), z.lazy(() => LanguageScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const LanguageScalarWhereInputObjectSchema: z.ZodType<Prisma.LanguageScalarWhereInput> = schema as unknown as z.ZodType<Prisma.LanguageScalarWhereInput>;
export const LanguageScalarWhereInputObjectZodSchema = schema;
