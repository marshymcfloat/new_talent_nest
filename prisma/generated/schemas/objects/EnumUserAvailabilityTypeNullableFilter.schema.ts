import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAvailabilityTypeSchema } from '../enums/UserAvailabilityType.schema';
import { NestedEnumUserAvailabilityTypeNullableFilterObjectSchema } from './NestedEnumUserAvailabilityTypeNullableFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  equals: UserAvailabilityTypeSchema.nullish(),
  in: UserAvailabilityTypeSchema.array().nullish(),
  notIn: UserAvailabilityTypeSchema.array().nullish(),
  not: z.union([UserAvailabilityTypeSchema, z.lazy(() => NestedEnumUserAvailabilityTypeNullableFilterObjectSchema)]).nullish()
}).strict();
export const EnumUserAvailabilityTypeNullableFilterObjectSchema: z.ZodType<Prisma.EnumUserAvailabilityTypeNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumUserAvailabilityTypeNullableFilter>;
export const EnumUserAvailabilityTypeNullableFilterObjectZodSchema = makeSchema();
