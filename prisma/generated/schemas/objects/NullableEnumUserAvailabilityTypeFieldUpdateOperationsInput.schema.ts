import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAvailabilityTypeSchema } from '../enums/UserAvailabilityType.schema'

const makeSchema = () => z.object({
  set: UserAvailabilityTypeSchema.optional()
}).strict();
export const NullableEnumUserAvailabilityTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumUserAvailabilityTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumUserAvailabilityTypeFieldUpdateOperationsInput>;
export const NullableEnumUserAvailabilityTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
