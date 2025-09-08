import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillWhereUniqueInputObjectSchema } from './SkillWhereUniqueInput.schema';
import { SkillCreateWithoutUsersInputObjectSchema } from './SkillCreateWithoutUsersInput.schema';
import { SkillUncheckedCreateWithoutUsersInputObjectSchema } from './SkillUncheckedCreateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SkillWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SkillCreateWithoutUsersInputObjectSchema), z.lazy(() => SkillUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const SkillCreateOrConnectWithoutUsersInputObjectSchema: z.ZodType<Prisma.SkillCreateOrConnectWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.SkillCreateOrConnectWithoutUsersInput>;
export const SkillCreateOrConnectWithoutUsersInputObjectZodSchema = makeSchema();
