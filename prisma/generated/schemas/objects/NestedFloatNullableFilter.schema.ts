import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  equals: z.number().nullish(),
  in: z.number().array().nullish(),
  notIn: z.number().array().nullish(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([z.number(), z.lazy(makeSchema)]).nullish()
}).strict();
export const NestedFloatNullableFilterObjectSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = makeSchema();
export const NestedFloatNullableFilterObjectZodSchema = makeSchema();
// Sanity-check the output type WITHOUT changing the variable’s type:
type NestedFloatNullableFilter = {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: number | NestedFloatNullableFilter;
};
(NestedFloatNullableFilterObjectZodSchema satisfies z.ZodType<NestedFloatNullableFilter>);
