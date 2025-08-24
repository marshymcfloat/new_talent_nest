import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedDateTimeFilterObjectSchema } from './NestedDateTimeFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  equals: z.date().optional(),
  in: z.union([z.date().array(), z.string().datetime().array()]).optional(),
  notIn: z.union([z.date().array(), z.string().datetime().array()]).optional(),
  lt: z.date().optional(),
  lte: z.date().optional(),
  gt: z.date().optional(),
  gte: z.date().optional(),
  not: z.union([z.date(), z.lazy(makeSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterObjectSchema).optional()
}).strict();
export const NestedDateTimeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = makeSchema();
export const NestedDateTimeWithAggregatesFilterObjectZodSchema = makeSchema();
// Sanity-check the output type WITHOUT changing the variable’s type:
type NestedDateTimeWithAggregatesFilter = {
  equals?: Date;
  in?: Date | string[];
  notIn?: Date | string[];
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: Date | NestedDateTimeWithAggregatesFilter;
  _count?: z.infer<typeof NestedIntFilterObjectSchema>;
  _min?: z.infer<typeof NestedDateTimeFilterObjectSchema>;
  _max?: z.infer<typeof NestedDateTimeFilterObjectSchema>;
};
(NestedDateTimeWithAggregatesFilterObjectZodSchema satisfies z.ZodType<NestedDateTimeWithAggregatesFilter>);
