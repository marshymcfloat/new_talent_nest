import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillWhereUniqueInputObjectSchema } from './SkillWhereUniqueInput.schema';
import { SkillUpdateWithoutUsersInputObjectSchema } from './SkillUpdateWithoutUsersInput.schema';
import { SkillUncheckedUpdateWithoutUsersInputObjectSchema } from './SkillUncheckedUpdateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SkillWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SkillUpdateWithoutUsersInputObjectSchema), z.lazy(() => SkillUncheckedUpdateWithoutUsersInputObjectSchema)])
}).strict();
export const SkillUpdateWithWhereUniqueWithoutUsersInputObjectSchema: z.ZodType<Prisma.SkillUpdateWithWhereUniqueWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.SkillUpdateWithWhereUniqueWithoutUsersInput>;
export const SkillUpdateWithWhereUniqueWithoutUsersInputObjectZodSchema = makeSchema();
