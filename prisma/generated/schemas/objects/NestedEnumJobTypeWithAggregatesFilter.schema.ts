import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobTypeSchema } from '../enums/JobType.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumJobTypeFilterObjectSchema } from './NestedEnumJobTypeFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  equals: JobTypeSchema.optional(),
  in: JobTypeSchema.array().optional(),
  notIn: JobTypeSchema.array().optional(),
  not: z.union([JobTypeSchema, z.lazy(makeSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumJobTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumJobTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumJobTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumJobTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.NestedEnumJobTypeWithAggregatesFilter>;
export const NestedEnumJobTypeWithAggregatesFilterObjectZodSchema = makeSchema();
