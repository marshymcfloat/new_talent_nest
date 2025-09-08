import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SalaryPeriodSchema } from '../enums/SalaryPeriod.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumSalaryPeriodNullableFilterObjectSchema } from './NestedEnumSalaryPeriodNullableFilter.schema'

const schema = z.object({
  equals: SalaryPeriodSchema.optional().nullable(),
  in: SalaryPeriodSchema.array().optional().nullable(),
  notIn: SalaryPeriodSchema.array().optional().nullable(),
  not: z.union([SalaryPeriodSchema, z.lazy(() => NestedEnumSalaryPeriodNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumSalaryPeriodNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumSalaryPeriodNullableFilterObjectSchema).optional()
}).strict();
export const NestedEnumSalaryPeriodNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumSalaryPeriodNullableWithAggregatesFilter> = schema as unknown as z.ZodType<Prisma.NestedEnumSalaryPeriodNullableWithAggregatesFilter>;
export const NestedEnumSalaryPeriodNullableWithAggregatesFilterObjectZodSchema = schema;
