import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobTypeSchema } from '../enums/JobType.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  equals: JobTypeSchema.optional(),
  in: JobTypeSchema.array().optional(),
  notIn: JobTypeSchema.array().optional(),
  not: z.union([JobTypeSchema, z.lazy(makeSchema)]).optional()
}).strict();
export const NestedEnumJobTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumJobTypeFilter> = makeSchema();
export const NestedEnumJobTypeFilterObjectZodSchema = makeSchema();
// Sanity-check the output type WITHOUT changing the variable’s type:
type NestedEnumJobTypeFilter = {
  equals?: unknown;
  in?: unknown[];
  notIn?: unknown[];
  not?: NestedEnumJobTypeFilter;
};
(NestedEnumJobTypeFilterObjectZodSchema satisfies z.ZodType<NestedEnumJobTypeFilter>);
