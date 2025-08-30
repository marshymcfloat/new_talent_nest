import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillCreateWithoutUsersInputObjectSchema } from './SkillCreateWithoutUsersInput.schema';
import { SkillUncheckedCreateWithoutUsersInputObjectSchema } from './SkillUncheckedCreateWithoutUsersInput.schema';
import { SkillCreateOrConnectWithoutUsersInputObjectSchema } from './SkillCreateOrConnectWithoutUsersInput.schema';
import { SkillWhereUniqueInputObjectSchema } from './SkillWhereUniqueInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  create: z.union([z.lazy(() => SkillCreateWithoutUsersInputObjectSchema), z.lazy(() => SkillCreateWithoutUsersInputObjectSchema).array(), z.lazy(() => SkillUncheckedCreateWithoutUsersInputObjectSchema), z.lazy(() => SkillUncheckedCreateWithoutUsersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SkillCreateOrConnectWithoutUsersInputObjectSchema), z.lazy(() => SkillCreateOrConnectWithoutUsersInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SkillWhereUniqueInputObjectSchema), z.lazy(() => SkillWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SkillUncheckedCreateNestedManyWithoutUsersInputObjectSchema: z.ZodType<Prisma.SkillUncheckedCreateNestedManyWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.SkillUncheckedCreateNestedManyWithoutUsersInput>;
export const SkillUncheckedCreateNestedManyWithoutUsersInputObjectZodSchema = makeSchema();
