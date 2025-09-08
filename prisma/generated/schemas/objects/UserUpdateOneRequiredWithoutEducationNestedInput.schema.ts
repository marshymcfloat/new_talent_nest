import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutEducationInputObjectSchema } from './UserCreateWithoutEducationInput.schema';
import { UserUncheckedCreateWithoutEducationInputObjectSchema } from './UserUncheckedCreateWithoutEducationInput.schema';
import { UserCreateOrConnectWithoutEducationInputObjectSchema } from './UserCreateOrConnectWithoutEducationInput.schema';
import { UserUpsertWithoutEducationInputObjectSchema } from './UserUpsertWithoutEducationInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutEducationInputObjectSchema } from './UserUpdateToOneWithWhereWithoutEducationInput.schema';
import { UserUpdateWithoutEducationInputObjectSchema } from './UserUpdateWithoutEducationInput.schema';
import { UserUncheckedUpdateWithoutEducationInputObjectSchema } from './UserUncheckedUpdateWithoutEducationInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutEducationInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutEducationInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutEducationInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutEducationInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutEducationInputObjectSchema), z.lazy(() => UserUpdateWithoutEducationInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutEducationInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutEducationNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutEducationNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutEducationNestedInput>;
export const UserUpdateOneRequiredWithoutEducationNestedInputObjectZodSchema = makeSchema();
