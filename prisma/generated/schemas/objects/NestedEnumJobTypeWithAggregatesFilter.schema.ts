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
export const NestedEnumJobTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumJobTypeWithAggregatesFilter> = makeSchema();
export const NestedEnumJobTypeWithAggregatesFilterObjectZodSchema = makeSchema();
// Sanity-check the output type WITHOUT changing the variable’s type:
type NestedEnumJobTypeWithAggregatesFilter = {
  equals?: unknown;
  in?: unknown[];
  notIn?: unknown[];
  not?: NestedEnumJobTypeWithAggregatesFilter;
  _count?: z.infer<typeof NestedIntFilterObjectSchema>;
  _min?: z.infer<typeof NestedEnumJobTypeFilterObjectSchema>;
  _max?: z.infer<typeof NestedEnumJobTypeFilterObjectSchema>;
};
(NestedEnumJobTypeWithAggregatesFilterObjectZodSchema satisfies z.ZodType<NestedEnumJobTypeWithAggregatesFilter>);
