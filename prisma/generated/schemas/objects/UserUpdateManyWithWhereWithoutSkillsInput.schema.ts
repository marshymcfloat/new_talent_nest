import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';
import { UserUpdateManyMutationInputObjectSchema } from './UserUpdateManyMutationInput.schema';
import { UserUncheckedUpdateManyWithoutSkillsInputObjectSchema } from './UserUncheckedUpdateManyWithoutSkillsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UserUpdateManyMutationInputObjectSchema), z.lazy(() => UserUncheckedUpdateManyWithoutSkillsInputObjectSchema)])
}).strict();
export const UserUpdateManyWithWhereWithoutSkillsInputObjectSchema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutSkillsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateManyWithWhereWithoutSkillsInput>;
export const UserUpdateManyWithWhereWithoutSkillsInputObjectZodSchema = makeSchema();
