import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutSkillsInputObjectSchema } from './UserCreateWithoutSkillsInput.schema';
import { UserUncheckedCreateWithoutSkillsInputObjectSchema } from './UserUncheckedCreateWithoutSkillsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutSkillsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSkillsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutSkillsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSkillsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutSkillsInput>;
export const UserCreateOrConnectWithoutSkillsInputObjectZodSchema = makeSchema();
