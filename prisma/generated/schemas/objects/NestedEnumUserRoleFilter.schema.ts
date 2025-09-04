import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserRoleSchema } from '../enums/UserRole.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  equals: UserRoleSchema.optional(),
  in: UserRoleSchema.array().optional(),
  notIn: UserRoleSchema.array().optional(),
  not: z.union([UserRoleSchema, z.lazy(makeSchema)]).optional()
}).strict();
export const NestedEnumUserRoleFilterObjectSchema: z.ZodType<Prisma.NestedEnumUserRoleFilter> = makeSchema() as unknown as z.ZodType<Prisma.NestedEnumUserRoleFilter>;
export const NestedEnumUserRoleFilterObjectZodSchema = makeSchema();
