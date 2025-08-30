import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUncheckedCreateNestedManyWithoutSkillsInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutSkillsInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutSkillsInputObjectSchema).optional()
}).strict();
export const SkillUncheckedCreateInputObjectSchema: z.ZodType<Prisma.SkillUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SkillUncheckedCreateInput>;
export const SkillUncheckedCreateInputObjectZodSchema = makeSchema();
