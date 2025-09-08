import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillScalarWhereInputObjectSchema } from './SkillScalarWhereInput.schema';
import { SkillUpdateManyMutationInputObjectSchema } from './SkillUpdateManyMutationInput.schema';
import { SkillUncheckedUpdateManyWithoutUsersInputObjectSchema } from './SkillUncheckedUpdateManyWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SkillScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SkillUpdateManyMutationInputObjectSchema), z.lazy(() => SkillUncheckedUpdateManyWithoutUsersInputObjectSchema)])
}).strict();
export const SkillUpdateManyWithWhereWithoutUsersInputObjectSchema: z.ZodType<Prisma.SkillUpdateManyWithWhereWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.SkillUpdateManyWithWhereWithoutUsersInput>;
export const SkillUpdateManyWithWhereWithoutUsersInputObjectZodSchema = makeSchema();
