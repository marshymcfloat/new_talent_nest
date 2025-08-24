import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  equals: z.date().optional(),
  in: z.union([z.date().array(), z.string().datetime().array()]).optional(),
  notIn: z.union([z.date().array(), z.string().datetime().array()]).optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(makeSchema)]).optional()
}).strict();
export const NestedDateTimeFilterObjectSchema: z.ZodType<Prisma.NestedDateTimeFilter> = makeSchema();
export const NestedDateTimeFilterObjectZodSchema = makeSchema();
// Sanity-check the output type WITHOUT changing the variable’s type:
type NestedDateTimeFilter = {
  equals?: Date;
  in?: Date | string[];
  notIn?: Date | string[];
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: Date | NestedDateTimeFilter;
};
(NestedDateTimeFilterObjectZodSchema satisfies z.ZodType<NestedDateTimeFilter>);
