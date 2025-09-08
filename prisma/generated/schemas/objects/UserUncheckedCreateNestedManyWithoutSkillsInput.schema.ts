import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutSkillsInputObjectSchema } from './UserCreateWithoutSkillsInput.schema';
import { UserUncheckedCreateWithoutSkillsInputObjectSchema } from './UserUncheckedCreateWithoutSkillsInput.schema';
import { UserCreateOrConnectWithoutSkillsInputObjectSchema } from './UserCreateOrConnectWithoutSkillsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutSkillsInputObjectSchema), z.lazy(() => UserCreateWithoutSkillsInputObjectSchema).array(), z.lazy(() => UserUncheckedCreateWithoutSkillsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSkillsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => UserCreateOrConnectWithoutSkillsInputObjectSchema), z.lazy(() => UserCreateOrConnectWithoutSkillsInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const UserUncheckedCreateNestedManyWithoutSkillsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutSkillsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutSkillsInput>;
export const UserUncheckedCreateNestedManyWithoutSkillsInputObjectZodSchema = makeSchema();
