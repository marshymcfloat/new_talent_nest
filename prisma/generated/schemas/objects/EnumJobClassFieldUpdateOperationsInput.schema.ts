import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobClassSchema } from '../enums/JobClass.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  set: JobClassSchema.optional()
}).strict();
export const EnumJobClassFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumJobClassFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumJobClassFieldUpdateOperationsInput>;
export const EnumJobClassFieldUpdateOperationsInputObjectZodSchema = makeSchema();
