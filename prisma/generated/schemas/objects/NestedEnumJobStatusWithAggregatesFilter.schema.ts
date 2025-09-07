import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobStatusSchema } from '../enums/JobStatus.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumJobStatusFilterObjectSchema } from './NestedEnumJobStatusFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  equals: JobStatusSchema.optional(),
  in: JobStatusSchema.array().optional(),
  notIn: JobStatusSchema.array().optional(),
  not: z.union([JobStatusSchema, z.lazy(makeSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumJobStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumJobStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumJobStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumJobStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.NestedEnumJobStatusWithAggregatesFilter>;
export const NestedEnumJobStatusWithAggregatesFilterObjectZodSchema = makeSchema();
