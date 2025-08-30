import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutSkillsInputObjectSchema } from './UserCreateWithoutSkillsInput.schema';
import { UserUncheckedCreateWithoutSkillsInputObjectSchema } from './UserUncheckedCreateWithoutSkillsInput.schema';
import { UserCreateOrConnectWithoutSkillsInputObjectSchema } from './UserCreateOrConnectWithoutSkillsInput.schema';
import { UserUpsertWithWhereUniqueWithoutSkillsInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutSkillsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutSkillsInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutSkillsInput.schema';
import { UserUpdateManyWithWhereWithoutSkillsInputObjectSchema } from './UserUpdateManyWithWhereWithoutSkillsInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutSkillsInputObjectSchema), z.lazy(() => UserCreateWithoutSkillsInputObjectSchema).array(), z.lazy(() => UserUncheckedCreateWithoutSkillsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSkillsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutSkillsInputObjectSchema), z.lazy(() => UserCreateOrConnectWithoutSkillsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => UserUpsertWithWhereUniqueWithoutSkillsInputObjectSchema), z.lazy(() => UserUpsertWithWhereUniqueWithoutSkillsInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => UserUpdateWithWhereUniqueWithoutSkillsInputObjectSchema), z.lazy(() => UserUpdateWithWhereUniqueWithoutSkillsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => UserUpdateManyWithWhereWithoutSkillsInputObjectSchema), z.lazy(() => UserUpdateManyWithWhereWithoutSkillsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => UserScalarWhereInputObjectSchema), z.lazy(() => UserScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const UserUncheckedUpdateManyWithoutSkillsNestedInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutSkillsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateManyWithoutSkillsNestedInput>;
export const UserUncheckedUpdateManyWithoutSkillsNestedInputObjectZodSchema = makeSchema();
