import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  equals: z.number().int().nullish(),
  in: z.number().int().array().nullish(),
  notIn: z.number().int().array().nullish(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(makeSchema)]).nullish()
}).strict();
export const NestedIntNullableFilterObjectSchema: z.ZodType<Prisma.NestedIntNullableFilter> = makeSchema();
export const NestedIntNullableFilterObjectZodSchema = makeSchema();
// Sanity-check the output type WITHOUT changing the variable’s type:
type NestedIntNullableFilter = {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: number | NestedIntNullableFilter;
};
(NestedIntNullableFilterObjectZodSchema satisfies z.ZodType<NestedIntNullableFilter>);
