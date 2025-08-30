import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SkillUncheckedUpdateWithoutUsersInputObjectSchema: z.ZodType<Prisma.SkillUncheckedUpdateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.SkillUncheckedUpdateWithoutUsersInput>;
export const SkillUncheckedUpdateWithoutUsersInputObjectZodSchema = makeSchema();
