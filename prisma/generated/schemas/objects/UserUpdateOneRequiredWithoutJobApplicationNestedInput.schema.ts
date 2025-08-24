import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutJobApplicationInputObjectSchema } from './UserCreateWithoutJobApplicationInput.schema';
import { UserUncheckedCreateWithoutJobApplicationInputObjectSchema } from './UserUncheckedCreateWithoutJobApplicationInput.schema';
import { UserCreateOrConnectWithoutJobApplicationInputObjectSchema } from './UserCreateOrConnectWithoutJobApplicationInput.schema';
import { UserUpsertWithoutJobApplicationInputObjectSchema } from './UserUpsertWithoutJobApplicationInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutJobApplicationInputObjectSchema } from './UserUpdateToOneWithWhereWithoutJobApplicationInput.schema';
import { UserUpdateWithoutJobApplicationInputObjectSchema } from './UserUpdateWithoutJobApplicationInput.schema';
import { UserUncheckedUpdateWithoutJobApplicationInputObjectSchema } from './UserUncheckedUpdateWithoutJobApplicationInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutJobApplicationInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutJobApplicationInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutJobApplicationInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutJobApplicationInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutJobApplicationInputObjectSchema), z.lazy(() => UserUpdateWithoutJobApplicationInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutJobApplicationInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutJobApplicationNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutJobApplicationNestedInput> = makeSchema();
export const UserUpdateOneRequiredWithoutJobApplicationNestedInputObjectZodSchema = makeSchema();
