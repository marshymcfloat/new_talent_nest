import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUncheckedUpdateManyWithoutSkillsNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutSkillsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  users: z.lazy(() => UserUncheckedUpdateManyWithoutSkillsNestedInputObjectSchema).optional()
}).strict();
export const SkillUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.SkillUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.SkillUncheckedUpdateInput>;
export const SkillUncheckedUpdateInputObjectZodSchema = makeSchema();
