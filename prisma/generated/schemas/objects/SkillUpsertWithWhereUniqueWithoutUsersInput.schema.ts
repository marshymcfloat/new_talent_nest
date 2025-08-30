import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillWhereUniqueInputObjectSchema } from './SkillWhereUniqueInput.schema';
import { SkillUpdateWithoutUsersInputObjectSchema } from './SkillUpdateWithoutUsersInput.schema';
import { SkillUncheckedUpdateWithoutUsersInputObjectSchema } from './SkillUncheckedUpdateWithoutUsersInput.schema';
import { SkillCreateWithoutUsersInputObjectSchema } from './SkillCreateWithoutUsersInput.schema';
import { SkillUncheckedCreateWithoutUsersInputObjectSchema } from './SkillUncheckedCreateWithoutUsersInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => SkillWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SkillUpdateWithoutUsersInputObjectSchema), z.lazy(() => SkillUncheckedUpdateWithoutUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => SkillCreateWithoutUsersInputObjectSchema), z.lazy(() => SkillUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const SkillUpsertWithWhereUniqueWithoutUsersInputObjectSchema: z.ZodType<Prisma.SkillUpsertWithWhereUniqueWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.SkillUpsertWithWhereUniqueWithoutUsersInput>;
export const SkillUpsertWithWhereUniqueWithoutUsersInputObjectZodSchema = makeSchema();
