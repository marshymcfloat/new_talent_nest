import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserApproachabilitySchema } from '../enums/UserApproachability.schema';
import { NestedEnumUserApproachabilityNullableFilterObjectSchema } from './NestedEnumUserApproachabilityNullableFilter.schema'

const makeSchema = () => z.object({
  equals: UserApproachabilitySchema.optional().nullable(),
  in: UserApproachabilitySchema.array().optional().nullable(),
  notIn: UserApproachabilitySchema.array().optional().nullable(),
  not: z.union([UserApproachabilitySchema, z.lazy(() => NestedEnumUserApproachabilityNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const EnumUserApproachabilityNullableFilterObjectSchema: z.ZodType<Prisma.EnumUserApproachabilityNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumUserApproachabilityNullableFilter>;
export const EnumUserApproachabilityNullableFilterObjectZodSchema = makeSchema();
