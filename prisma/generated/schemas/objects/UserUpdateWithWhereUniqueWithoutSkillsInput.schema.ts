import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutSkillsInputObjectSchema } from './UserUpdateWithoutSkillsInput.schema';
import { UserUncheckedUpdateWithoutSkillsInputObjectSchema } from './UserUncheckedUpdateWithoutSkillsInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateWithoutSkillsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutSkillsInputObjectSchema)])
}).strict();
export const UserUpdateWithWhereUniqueWithoutSkillsInputObjectSchema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutSkillsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutSkillsInput>;
export const UserUpdateWithWhereUniqueWithoutSkillsInputObjectZodSchema = makeSchema();
