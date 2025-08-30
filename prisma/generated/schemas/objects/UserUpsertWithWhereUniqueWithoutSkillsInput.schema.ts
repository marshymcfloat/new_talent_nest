import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutSkillsInputObjectSchema } from './UserUpdateWithoutSkillsInput.schema';
import { UserUncheckedUpdateWithoutSkillsInputObjectSchema } from './UserUncheckedUpdateWithoutSkillsInput.schema';
import { UserCreateWithoutSkillsInputObjectSchema } from './UserCreateWithoutSkillsInput.schema';
import { UserUncheckedCreateWithoutSkillsInputObjectSchema } from './UserUncheckedCreateWithoutSkillsInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UserUpdateWithoutSkillsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutSkillsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutSkillsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSkillsInputObjectSchema)])
}).strict();
export const UserUpsertWithWhereUniqueWithoutSkillsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutSkillsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutSkillsInput>;
export const UserUpsertWithWhereUniqueWithoutSkillsInputObjectZodSchema = makeSchema();
