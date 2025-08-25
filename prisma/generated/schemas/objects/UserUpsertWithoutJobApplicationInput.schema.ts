import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutJobApplicationInputObjectSchema } from './UserUpdateWithoutJobApplicationInput.schema';
import { UserUncheckedUpdateWithoutJobApplicationInputObjectSchema } from './UserUncheckedUpdateWithoutJobApplicationInput.schema';
import { UserCreateWithoutJobApplicationInputObjectSchema } from './UserCreateWithoutJobApplicationInput.schema';
import { UserUncheckedCreateWithoutJobApplicationInputObjectSchema } from './UserUncheckedCreateWithoutJobApplicationInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutJobApplicationInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutJobApplicationInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutJobApplicationInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutJobApplicationInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutJobApplicationInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutJobApplicationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutJobApplicationInput>;
export const UserUpsertWithoutJobApplicationInputObjectZodSchema = makeSchema();
