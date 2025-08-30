import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobTypeSchema } from '../enums/JobType.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  set: JobTypeSchema.nullish()
}).strict();
export const NullableEnumJobTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumJobTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumJobTypeFieldUpdateOperationsInput>;
export const NullableEnumJobTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
