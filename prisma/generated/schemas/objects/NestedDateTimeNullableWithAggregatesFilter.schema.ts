import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedDateTimeNullableFilterObjectSchema } from './NestedDateTimeNullableFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  equals: z.date().nullish(),
  in: z.union([z.date().array(), z.string().datetime().array()]).nullish(),
  notIn: z.union([z.date().array(), z.string().datetime().array()]).nullish(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(makeSchema)]).nullish(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterObjectSchema).optional()
}).strict();
export const NestedDateTimeNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = makeSchema();
export const NestedDateTimeNullableWithAggregatesFilterObjectZodSchema = makeSchema();
// Sanity-check the output type WITHOUT changing the variable’s type:
type NestedDateTimeNullableWithAggregatesFilter = {
  equals?: Date;
  in?: Date | string[];
  notIn?: Date | string[];
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: Date | NestedDateTimeNullableWithAggregatesFilter;
  _count?: z.infer<typeof NestedIntNullableFilterObjectSchema>;
  _min?: z.infer<typeof NestedDateTimeNullableFilterObjectSchema>;
  _max?: z.infer<typeof NestedDateTimeNullableFilterObjectSchema>;
};
(NestedDateTimeNullableWithAggregatesFilterObjectZodSchema satisfies z.ZodType<NestedDateTimeNullableWithAggregatesFilter>);
