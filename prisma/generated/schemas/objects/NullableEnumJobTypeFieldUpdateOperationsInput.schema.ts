import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobTypeSchema } from '../enums/JobType.schema'

const makeSchema = () => z.object({
  set: JobTypeSchema.optional()
}).strict();
export const NullableEnumJobTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumJobTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumJobTypeFieldUpdateOperationsInput>;
export const NullableEnumJobTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
