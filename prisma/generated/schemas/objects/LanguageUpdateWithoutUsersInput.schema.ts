import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const LanguageUpdateWithoutUsersInputObjectSchema: z.ZodType<Prisma.LanguageUpdateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUpdateWithoutUsersInput>;
export const LanguageUpdateWithoutUsersInputObjectZodSchema = makeSchema();
