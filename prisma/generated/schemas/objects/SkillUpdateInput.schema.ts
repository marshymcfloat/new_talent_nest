import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateManyWithoutSkillsNestedInputObjectSchema } from './UserUpdateManyWithoutSkillsNestedInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  users: z.lazy(() => UserUpdateManyWithoutSkillsNestedInputObjectSchema).optional()
}).strict();
export const SkillUpdateInputObjectSchema: z.ZodType<Prisma.SkillUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.SkillUpdateInput>;
export const SkillUpdateInputObjectZodSchema = makeSchema();
