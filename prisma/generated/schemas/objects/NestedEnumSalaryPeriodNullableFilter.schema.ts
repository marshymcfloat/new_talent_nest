import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SalaryPeriodSchema } from '../enums/SalaryPeriod.schema'

const schema = z.object({
  equals: SalaryPeriodSchema.optional().nullable(),
  in: SalaryPeriodSchema.array().optional().nullable(),
  notIn: SalaryPeriodSchema.array().optional().nullable(),
  not: z.union([SalaryPeriodSchema, z.lazy(() => NestedEnumSalaryPeriodNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumSalaryPeriodNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumSalaryPeriodNullableFilter> = schema as unknown as z.ZodType<Prisma.NestedEnumSalaryPeriodNullableFilter>;
export const NestedEnumSalaryPeriodNullableFilterObjectZodSchema = schema;
