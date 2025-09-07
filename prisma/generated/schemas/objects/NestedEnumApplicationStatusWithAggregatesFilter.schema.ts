import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ApplicationStatusSchema } from '../enums/ApplicationStatus.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumApplicationStatusFilterObjectSchema } from './NestedEnumApplicationStatusFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  equals: ApplicationStatusSchema.optional(),
  in: ApplicationStatusSchema.array().optional(),
  notIn: ApplicationStatusSchema.array().optional(),
  not: z.union([ApplicationStatusSchema, z.lazy(makeSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumApplicationStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumApplicationStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumApplicationStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumApplicationStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.NestedEnumApplicationStatusWithAggregatesFilter>;
export const NestedEnumApplicationStatusWithAggregatesFilterObjectZodSchema = makeSchema();
