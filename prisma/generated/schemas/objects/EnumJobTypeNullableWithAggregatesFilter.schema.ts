import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobTypeSchema } from '../enums/JobType.schema';
import { NestedEnumJobTypeNullableWithAggregatesFilterObjectSchema } from './NestedEnumJobTypeNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumJobTypeNullableFilterObjectSchema } from './NestedEnumJobTypeNullableFilter.schema'

const makeSchema = () => z.object({
  equals: JobTypeSchema.optional().nullable(),
  in: JobTypeSchema.array().optional().nullable(),
  notIn: JobTypeSchema.array().optional().nullable(),
  not: z.union([JobTypeSchema, z.lazy(() => NestedEnumJobTypeNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumJobTypeNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumJobTypeNullableFilterObjectSchema).optional()
}).strict();
export const EnumJobTypeNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumJobTypeNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumJobTypeNullableWithAggregatesFilter>;
export const EnumJobTypeNullableWithAggregatesFilterObjectZodSchema = makeSchema();
