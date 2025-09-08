import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobClassSchema } from '../enums/JobClass.schema';
import { NestedEnumJobClassWithAggregatesFilterObjectSchema } from './NestedEnumJobClassWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumJobClassFilterObjectSchema } from './NestedEnumJobClassFilter.schema'

const makeSchema = () => z.object({
  equals: JobClassSchema.optional(),
  in: JobClassSchema.array().optional(),
  notIn: JobClassSchema.array().optional(),
  not: z.union([JobClassSchema, z.lazy(() => NestedEnumJobClassWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumJobClassFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumJobClassFilterObjectSchema).optional()
}).strict();
export const EnumJobClassWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumJobClassWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumJobClassWithAggregatesFilter>;
export const EnumJobClassWithAggregatesFilterObjectZodSchema = makeSchema();
