import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobTypeSchema } from '../enums/JobType.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumJobTypeNullableFilterObjectSchema } from './NestedEnumJobTypeNullableFilter.schema'

const schema = z.object({
  equals: JobTypeSchema.optional().nullable(),
  in: JobTypeSchema.array().optional().nullable(),
  notIn: JobTypeSchema.array().optional().nullable(),
  not: z.union([JobTypeSchema, z.lazy(() => NestedEnumJobTypeNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumJobTypeNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumJobTypeNullableFilterObjectSchema).optional()
}).strict();
export const NestedEnumJobTypeNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumJobTypeNullableWithAggregatesFilter> = schema as unknown as z.ZodType<Prisma.NestedEnumJobTypeNullableWithAggregatesFilter>;
export const NestedEnumJobTypeNullableWithAggregatesFilterObjectZodSchema = schema;
