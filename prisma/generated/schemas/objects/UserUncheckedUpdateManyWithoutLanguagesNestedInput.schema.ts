import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutLanguagesInputObjectSchema } from './UserCreateWithoutLanguagesInput.schema';
import { UserUncheckedCreateWithoutLanguagesInputObjectSchema } from './UserUncheckedCreateWithoutLanguagesInput.schema';
import { UserCreateOrConnectWithoutLanguagesInputObjectSchema } from './UserCreateOrConnectWithoutLanguagesInput.schema';
import { UserUpsertWithWhereUniqueWithoutLanguagesInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutLanguagesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutLanguagesInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutLanguagesInput.schema';
import { UserUpdateManyWithWhereWithoutLanguagesInputObjectSchema } from './UserUpdateManyWithWhereWithoutLanguagesInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutLanguagesInputObjectSchema), z.lazy(() => UserCreateWithoutLanguagesInputObjectSchema).array(), z.lazy(() => UserUncheckedCreateWithoutLanguagesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutLanguagesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutLanguagesInputObjectSchema), z.lazy(() => UserCreateOrConnectWithoutLanguagesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserUpsertWithWhereUniqueWithoutLanguagesInputObjectSchema), z.lazy(() => UserUpsertWithWhereUniqueWithoutLanguagesInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserUpdateWithWhereUniqueWithoutLanguagesInputObjectSchema), z.lazy(() => UserUpdateWithWhereUniqueWithoutLanguagesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserUpdateManyWithWhereWithoutLanguagesInputObjectSchema), z.lazy(() => UserUpdateManyWithWhereWithoutLanguagesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserScalarWhereInputObjectSchema), z.lazy(() => UserScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UserUncheckedUpdateManyWithoutLanguagesNestedInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutLanguagesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateManyWithoutLanguagesNestedInput>;
export const UserUncheckedUpdateManyWithoutLanguagesNestedInputObjectZodSchema = makeSchema();
