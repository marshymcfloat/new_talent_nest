import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const LanguageUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.LanguageUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUncheckedUpdateManyInput>;
export const LanguageUncheckedUpdateManyInputObjectZodSchema = makeSchema();
