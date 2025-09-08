import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutEducationInputObjectSchema } from './UserUpdateWithoutEducationInput.schema';
import { UserUncheckedUpdateWithoutEducationInputObjectSchema } from './UserUncheckedUpdateWithoutEducationInput.schema';
import { UserCreateWithoutEducationInputObjectSchema } from './UserCreateWithoutEducationInput.schema';
import { UserUncheckedCreateWithoutEducationInputObjectSchema } from './UserUncheckedCreateWithoutEducationInput.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutEducationInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutEducationInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutEducationInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutEducationInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutEducationInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutEducationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutEducationInput>;
export const UserUpsertWithoutEducationInputObjectZodSchema = makeSchema();
