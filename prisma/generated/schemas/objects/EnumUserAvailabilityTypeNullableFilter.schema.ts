import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAvailabilityTypeSchema } from '../enums/UserAvailabilityType.schema';
import { NestedEnumUserAvailabilityTypeNullableFilterObjectSchema } from './NestedEnumUserAvailabilityTypeNullableFilter.schema'

const makeSchema = () => z.object({
  equals: UserAvailabilityTypeSchema.optional().nullable(),
  in: UserAvailabilityTypeSchema.array().optional().nullable(),
  notIn: UserAvailabilityTypeSchema.array().optional().nullable(),
  not: z.union([UserAvailabilityTypeSchema, z.lazy(() => NestedEnumUserAvailabilityTypeNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const EnumUserAvailabilityTypeNullableFilterObjectSchema: z.ZodType<Prisma.EnumUserAvailabilityTypeNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumUserAvailabilityTypeNullableFilter>;
export const EnumUserAvailabilityTypeNullableFilterObjectZodSchema = makeSchema();
