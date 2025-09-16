import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserApproachabilitySchema } from '../enums/UserApproachability.schema';
import { NestedEnumUserApproachabilityNullableWithAggregatesFilterObjectSchema } from './NestedEnumUserApproachabilityNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumUserApproachabilityNullableFilterObjectSchema } from './NestedEnumUserApproachabilityNullableFilter.schema'

const makeSchema = () => z.object({
  equals: UserApproachabilitySchema.optional().nullable(),
  in: UserApproachabilitySchema.array().optional().nullable(),
  notIn: UserApproachabilitySchema.array().optional().nullable(),
  not: z.union([UserApproachabilitySchema, z.lazy(() => NestedEnumUserApproachabilityNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumUserApproachabilityNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumUserApproachabilityNullableFilterObjectSchema).optional()
}).strict();
export const EnumUserApproachabilityNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumUserApproachabilityNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumUserApproachabilityNullableWithAggregatesFilter>;
export const EnumUserApproachabilityNullableWithAggregatesFilterObjectZodSchema = makeSchema();
