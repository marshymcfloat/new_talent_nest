import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUncheckedUpdateManyWithoutLanguagesNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutLanguagesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  users: z.lazy(() => UserUncheckedUpdateManyWithoutLanguagesNestedInputObjectSchema).optional()
}).strict();
export const LanguageUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.LanguageUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUncheckedUpdateInput>;
export const LanguageUncheckedUpdateInputObjectZodSchema = makeSchema();
