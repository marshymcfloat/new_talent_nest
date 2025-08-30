import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  every: z.lazy(() => UserWhereInputObjectSchema).optional(),
  some: z.lazy(() => UserWhereInputObjectSchema).optional(),
  none: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserListRelationFilterObjectSchema: z.ZodType<Prisma.UserListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.UserListRelationFilter>;
export const UserListRelationFilterObjectZodSchema = makeSchema();
