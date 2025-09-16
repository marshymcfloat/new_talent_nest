import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserApproachabilitySchema } from '../enums/UserApproachability.schema'

const schema = z.object({
  equals: UserApproachabilitySchema.optional().nullable(),
  in: UserApproachabilitySchema.array().optional().nullable(),
  notIn: UserApproachabilitySchema.array().optional().nullable(),
  not: z.union([UserApproachabilitySchema, z.lazy(() => NestedEnumUserApproachabilityNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumUserApproachabilityNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumUserApproachabilityNullableFilter> = schema as unknown as z.ZodType<Prisma.NestedEnumUserApproachabilityNullableFilter>;
export const NestedEnumUserApproachabilityNullableFilterObjectZodSchema = schema;
