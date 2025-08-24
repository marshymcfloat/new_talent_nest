import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  set: z.string().optional()
}).strict();
export const StringFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = makeSchema();
export const StringFieldUpdateOperationsInputObjectZodSchema = makeSchema();
