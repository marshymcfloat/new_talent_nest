import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobClassSchema } from '../enums/JobClass.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumJobClassFilterObjectSchema } from './NestedEnumJobClassFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  equals: JobClassSchema.optional(),
  in: JobClassSchema.array().optional(),
  notIn: JobClassSchema.array().optional(),
  not: z.union([JobClassSchema, z.lazy(makeSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumJobClassFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumJobClassFilterObjectSchema).optional()
}).strict();
export const NestedEnumJobClassWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumJobClassWithAggregatesFilter> = makeSchema();
export const NestedEnumJobClassWithAggregatesFilterObjectZodSchema = makeSchema();
// Sanity-check the output type WITHOUT changing the variable’s type:
type NestedEnumJobClassWithAggregatesFilter = {
  equals?: unknown;
  in?: unknown[];
  notIn?: unknown[];
  not?: NestedEnumJobClassWithAggregatesFilter;
  _count?: z.infer<typeof NestedIntFilterObjectSchema>;
  _min?: z.infer<typeof NestedEnumJobClassFilterObjectSchema>;
  _max?: z.infer<typeof NestedEnumJobClassFilterObjectSchema>;
};
(NestedEnumJobClassWithAggregatesFilterObjectZodSchema satisfies z.ZodType<NestedEnumJobClassWithAggregatesFilter>);
