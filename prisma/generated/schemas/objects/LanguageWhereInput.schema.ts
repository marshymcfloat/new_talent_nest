import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => LanguageWhereInputObjectSchema), z.lazy(() => LanguageWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LanguageWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LanguageWhereInputObjectSchema), z.lazy(() => LanguageWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  users: z.lazy(() => UserListRelationFilterObjectSchema).optional()
}).strict();
export const LanguageWhereInputObjectSchema: z.ZodType<Prisma.LanguageWhereInput> = schema as unknown as z.ZodType<Prisma.LanguageWhereInput>;
export const LanguageWhereInputObjectZodSchema = schema;
