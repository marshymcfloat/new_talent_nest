import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobTypeSchema } from '../enums/JobType.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  set: JobTypeSchema.optional()
}).strict();
export const EnumJobTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumJobTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumJobTypeFieldUpdateOperationsInput>;
export const EnumJobTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
