import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillCreateWithoutUsersInputObjectSchema } from './SkillCreateWithoutUsersInput.schema';
import { SkillUncheckedCreateWithoutUsersInputObjectSchema } from './SkillUncheckedCreateWithoutUsersInput.schema';
import { SkillCreateOrConnectWithoutUsersInputObjectSchema } from './SkillCreateOrConnectWithoutUsersInput.schema';
import { SkillUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './SkillUpsertWithWhereUniqueWithoutUsersInput.schema';
import { SkillWhereUniqueInputObjectSchema } from './SkillWhereUniqueInput.schema';
import { SkillUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './SkillUpdateWithWhereUniqueWithoutUsersInput.schema';
import { SkillUpdateManyWithWhereWithoutUsersInputObjectSchema } from './SkillUpdateManyWithWhereWithoutUsersInput.schema';
import { SkillScalarWhereInputObjectSchema } from './SkillScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SkillCreateWithoutUsersInputObjectSchema), z.lazy(() => SkillCreateWithoutUsersInputObjectSchema).array(), z.lazy(() => SkillUncheckedCreateWithoutUsersInputObjectSchema), z.lazy(() => SkillUncheckedCreateWithoutUsersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SkillCreateOrConnectWithoutUsersInputObjectSchema), z.lazy(() => SkillCreateOrConnectWithoutUsersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SkillUpsertWithWhereUniqueWithoutUsersInputObjectSchema), z.lazy(() => SkillUpsertWithWhereUniqueWithoutUsersInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => SkillWhereUniqueInputObjectSchema), z.lazy(() => SkillWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SkillWhereUniqueInputObjectSchema), z.lazy(() => SkillWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SkillWhereUniqueInputObjectSchema), z.lazy(() => SkillWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SkillWhereUniqueInputObjectSchema), z.lazy(() => SkillWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SkillUpdateWithWhereUniqueWithoutUsersInputObjectSchema), z.lazy(() => SkillUpdateWithWhereUniqueWithoutUsersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SkillUpdateManyWithWhereWithoutUsersInputObjectSchema), z.lazy(() => SkillUpdateManyWithWhereWithoutUsersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SkillScalarWhereInputObjectSchema), z.lazy(() => SkillScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SkillUncheckedUpdateManyWithoutUsersNestedInputObjectSchema: z.ZodType<Prisma.SkillUncheckedUpdateManyWithoutUsersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SkillUncheckedUpdateManyWithoutUsersNestedInput>;
export const SkillUncheckedUpdateManyWithoutUsersNestedInputObjectZodSchema = makeSchema();
