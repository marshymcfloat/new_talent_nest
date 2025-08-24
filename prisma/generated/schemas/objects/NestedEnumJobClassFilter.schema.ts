import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobClassSchema } from '../enums/JobClass.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  equals: JobClassSchema.optional(),
  in: JobClassSchema.array().optional(),
  notIn: JobClassSchema.array().optional(),
  not: z.union([JobClassSchema, z.lazy(makeSchema)]).optional()
}).strict();
export const NestedEnumJobClassFilterObjectSchema: z.ZodType<Prisma.NestedEnumJobClassFilter> = makeSchema();
export const NestedEnumJobClassFilterObjectZodSchema = makeSchema();
// Sanity-check the output type WITHOUT changing the variable’s type:
type NestedEnumJobClassFilter = {
  equals?: unknown;
  in?: unknown[];
  notIn?: unknown[];
  not?: NestedEnumJobClassFilter;
};
(NestedEnumJobClassFilterObjectZodSchema satisfies z.ZodType<NestedEnumJobClassFilter>);
