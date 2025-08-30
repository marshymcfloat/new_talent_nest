import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobTypeSchema } from '../enums/JobType.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumJobTypeNullableFilterObjectSchema } from './NestedEnumJobTypeNullableFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  equals: JobTypeSchema.nullish(),
  in: JobTypeSchema.array().nullish(),
  notIn: JobTypeSchema.array().nullish(),
  not: z.union([JobTypeSchema, z.lazy(makeSchema)]).nullish(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumJobTypeNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumJobTypeNullableFilterObjectSchema).optional()
}).strict();
export const NestedEnumJobTypeNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumJobTypeNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.NestedEnumJobTypeNullableWithAggregatesFilter>;
export const NestedEnumJobTypeNullableWithAggregatesFilterObjectZodSchema = makeSchema();
