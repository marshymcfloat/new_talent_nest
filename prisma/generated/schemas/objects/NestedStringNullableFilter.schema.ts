import { z } from 'zod';
import type { Prisma } from '@prisma/client';


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
  not: z.union([z.string(), z.lazy(makeSchema)]).nullish()
}).strict();
export const NestedStringNullableFilterObjectSchema: z.ZodType<Prisma.NestedStringNullableFilter> = makeSchema();
export const NestedStringNullableFilterObjectZodSchema = makeSchema();
// Sanity-check the output type WITHOUT changing the variable’s type:
type NestedStringNullableFilter = {
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
  not?: string | NestedStringNullableFilter;
};
(NestedStringNullableFilterObjectZodSchema satisfies z.ZodType<NestedStringNullableFilter>);
