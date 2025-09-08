import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateManyWithoutLanguagesNestedInputObjectSchema } from './UserUpdateManyWithoutLanguagesNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  users: z.lazy(() => UserUpdateManyWithoutLanguagesNestedInputObjectSchema).optional()
}).strict();
export const LanguageUpdateInputObjectSchema: z.ZodType<Prisma.LanguageUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUpdateInput>;
export const LanguageUpdateInputObjectZodSchema = makeSchema();
