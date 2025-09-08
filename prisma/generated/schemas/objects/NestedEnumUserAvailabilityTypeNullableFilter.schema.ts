import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAvailabilityTypeSchema } from '../enums/UserAvailabilityType.schema'

const schema = z.object({
  equals: UserAvailabilityTypeSchema.optional().nullable(),
  in: UserAvailabilityTypeSchema.array().optional().nullable(),
  notIn: UserAvailabilityTypeSchema.array().optional().nullable(),
  not: z.union([UserAvailabilityTypeSchema, z.lazy(() => NestedEnumUserAvailabilityTypeNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumUserAvailabilityTypeNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumUserAvailabilityTypeNullableFilter> = schema as unknown as z.ZodType<Prisma.NestedEnumUserAvailabilityTypeNullableFilter>;
export const NestedEnumUserAvailabilityTypeNullableFilterObjectZodSchema = schema;
