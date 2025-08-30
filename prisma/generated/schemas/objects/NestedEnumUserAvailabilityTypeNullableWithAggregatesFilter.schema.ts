import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAvailabilityTypeSchema } from '../enums/UserAvailabilityType.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumUserAvailabilityTypeNullableFilterObjectSchema } from './NestedEnumUserAvailabilityTypeNullableFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  equals: UserAvailabilityTypeSchema.nullish(),
  in: UserAvailabilityTypeSchema.array().nullish(),
  notIn: UserAvailabilityTypeSchema.array().nullish(),
  not: z.union([UserAvailabilityTypeSchema, z.lazy(makeSchema)]).nullish(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumUserAvailabilityTypeNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumUserAvailabilityTypeNullableFilterObjectSchema).optional()
}).strict();
export const NestedEnumUserAvailabilityTypeNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumUserAvailabilityTypeNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.NestedEnumUserAvailabilityTypeNullableWithAggregatesFilter>;
export const NestedEnumUserAvailabilityTypeNullableWithAggregatesFilterObjectZodSchema = makeSchema();
