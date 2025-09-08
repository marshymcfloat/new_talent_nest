import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAvailabilityTypeSchema } from '../enums/UserAvailabilityType.schema';
import { NestedEnumUserAvailabilityTypeNullableWithAggregatesFilterObjectSchema } from './NestedEnumUserAvailabilityTypeNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumUserAvailabilityTypeNullableFilterObjectSchema } from './NestedEnumUserAvailabilityTypeNullableFilter.schema'

const makeSchema = () => z.object({
  equals: UserAvailabilityTypeSchema.optional().nullable(),
  in: UserAvailabilityTypeSchema.array().optional().nullable(),
  notIn: UserAvailabilityTypeSchema.array().optional().nullable(),
  not: z.union([UserAvailabilityTypeSchema, z.lazy(() => NestedEnumUserAvailabilityTypeNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumUserAvailabilityTypeNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumUserAvailabilityTypeNullableFilterObjectSchema).optional()
}).strict();
export const EnumUserAvailabilityTypeNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumUserAvailabilityTypeNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumUserAvailabilityTypeNullableWithAggregatesFilter>;
export const EnumUserAvailabilityTypeNullableWithAggregatesFilterObjectZodSchema = makeSchema();
