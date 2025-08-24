import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedStringNullableFilterObjectSchema } from './NestedStringNullableFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  equals: z.string().nullish(),
  in: z.string().array().nullish(),
  notIn: z.string().array().nullish(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([z.string(), z.lazy(makeSchema)]).nullish(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterObjectSchema).optional()
}).strict();
export const NestedStringNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = makeSchema();
export const NestedStringNullableWithAggregatesFilterObjectZodSchema = makeSchema();
// Sanity-check the output type WITHOUT changing the variable’s type:
type NestedStringNullableWithAggregatesFilter = {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: string | NestedStringNullableWithAggregatesFilter;
  _count?: z.infer<typeof NestedIntNullableFilterObjectSchema>;
  _min?: z.infer<typeof NestedStringNullableFilterObjectSchema>;
  _max?: z.infer<typeof NestedStringNullableFilterObjectSchema>;
};
(NestedStringNullableWithAggregatesFilterObjectZodSchema satisfies z.ZodType<NestedStringNullableWithAggregatesFilter>);
