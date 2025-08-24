import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  set: z.date().nullish()
}).strict();
export const NullableDateTimeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = makeSchema();
export const NullableDateTimeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
