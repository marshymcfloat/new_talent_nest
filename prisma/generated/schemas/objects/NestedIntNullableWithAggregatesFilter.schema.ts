import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedFloatNullableFilterObjectSchema } from './NestedFloatNullableFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  equals: z.number().int().nullish(),
  in: z.number().int().array().nullish(),
  notIn: z.number().int().array().nullish(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(makeSchema)]).nullish(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterObjectSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterObjectSchema).optional()
}).strict();
export const NestedIntNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = makeSchema();
export const NestedIntNullableWithAggregatesFilterObjectZodSchema = makeSchema();
// Sanity-check the output type WITHOUT changing the variable’s type:
type NestedIntNullableWithAggregatesFilter = {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: number | NestedIntNullableWithAggregatesFilter;
  _count?: z.infer<typeof NestedIntNullableFilterObjectSchema>;
  _avg?: z.infer<typeof NestedFloatNullableFilterObjectSchema>;
  _sum?: z.infer<typeof NestedIntNullableFilterObjectSchema>;
  _min?: z.infer<typeof NestedIntNullableFilterObjectSchema>;
  _max?: z.infer<typeof NestedIntNullableFilterObjectSchema>;
};
(NestedIntNullableWithAggregatesFilterObjectZodSchema satisfies z.ZodType<NestedIntNullableWithAggregatesFilter>);
