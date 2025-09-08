import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobTypeSchema } from '../enums/JobType.schema';
import { NestedEnumJobTypeWithAggregatesFilterObjectSchema } from './NestedEnumJobTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumJobTypeFilterObjectSchema } from './NestedEnumJobTypeFilter.schema'

const makeSchema = () => z.object({
  equals: JobTypeSchema.optional(),
  in: JobTypeSchema.array().optional(),
  notIn: JobTypeSchema.array().optional(),
  not: z.union([JobTypeSchema, z.lazy(() => NestedEnumJobTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumJobTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumJobTypeFilterObjectSchema).optional()
}).strict();
export const EnumJobTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumJobTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumJobTypeWithAggregatesFilter>;
export const EnumJobTypeWithAggregatesFilterObjectZodSchema = makeSchema();
