import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedManyWithoutSkillsInputObjectSchema } from './UserCreateNestedManyWithoutSkillsInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  users: z.lazy(() => UserCreateNestedManyWithoutSkillsInputObjectSchema)
}).strict();
export const SkillCreateInputObjectSchema: z.ZodType<Prisma.SkillCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SkillCreateInput>;
export const SkillCreateInputObjectZodSchema = makeSchema();
