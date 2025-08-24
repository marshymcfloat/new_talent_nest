import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  equals: z.number().int().optional(),
  in: z.number().int().array().optional(),
  notIn: z.number().int().array().optional(),
  lt: z.number().int().optional(),
  lte: z.number().int().optional(),
  gt: z.number().int().optional(),
  gte: z.number().int().optional(),
  not: z.union([z.number().int(), z.lazy(makeSchema)]).optional()
}).strict();
export const NestedIntFilterObjectSchema: z.ZodType<Prisma.NestedIntFilter> = makeSchema();
export const NestedIntFilterObjectZodSchema = makeSchema();
// Sanity-check the output type WITHOUT changing the variable’s type:
type NestedIntFilter = {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: number | NestedIntFilter;
};
(NestedIntFilterObjectZodSchema satisfies z.ZodType<NestedIntFilter>);
