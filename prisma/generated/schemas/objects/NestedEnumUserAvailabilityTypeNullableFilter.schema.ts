import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAvailabilityTypeSchema } from '../enums/UserAvailabilityType.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  equals: UserAvailabilityTypeSchema.nullish(),
  in: UserAvailabilityTypeSchema.array().nullish(),
  notIn: UserAvailabilityTypeSchema.array().nullish(),
  not: z.union([UserAvailabilityTypeSchema, z.lazy(makeSchema)]).nullish()
}).strict();
export const NestedEnumUserAvailabilityTypeNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumUserAvailabilityTypeNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.NestedEnumUserAvailabilityTypeNullableFilter>;
export const NestedEnumUserAvailabilityTypeNullableFilterObjectZodSchema = makeSchema();
