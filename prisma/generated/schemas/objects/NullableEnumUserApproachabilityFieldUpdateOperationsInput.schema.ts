import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserApproachabilitySchema } from '../enums/UserApproachability.schema'

const makeSchema = () => z.object({
  set: UserApproachabilitySchema.optional()
}).strict();
export const NullableEnumUserApproachabilityFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumUserApproachabilityFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumUserApproachabilityFieldUpdateOperationsInput>;
export const NullableEnumUserApproachabilityFieldUpdateOperationsInputObjectZodSchema = makeSchema();
