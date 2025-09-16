import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserApproachabilitySchema } from '../enums/UserApproachability.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumUserApproachabilityNullableFilterObjectSchema } from './NestedEnumUserApproachabilityNullableFilter.schema'

const schema = z.object({
  equals: UserApproachabilitySchema.optional().nullable(),
  in: UserApproachabilitySchema.array().optional().nullable(),
  notIn: UserApproachabilitySchema.array().optional().nullable(),
  not: z.union([UserApproachabilitySchema, z.lazy(() => NestedEnumUserApproachabilityNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumUserApproachabilityNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumUserApproachabilityNullableFilterObjectSchema).optional()
}).strict();
export const NestedEnumUserApproachabilityNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumUserApproachabilityNullableWithAggregatesFilter> = schema as unknown as z.ZodType<Prisma.NestedEnumUserApproachabilityNullableWithAggregatesFilter>;
export const NestedEnumUserApproachabilityNullableWithAggregatesFilterObjectZodSchema = schema;
