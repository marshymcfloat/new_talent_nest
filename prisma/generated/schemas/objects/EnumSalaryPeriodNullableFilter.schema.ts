import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SalaryPeriodSchema } from '../enums/SalaryPeriod.schema';
import { NestedEnumSalaryPeriodNullableFilterObjectSchema } from './NestedEnumSalaryPeriodNullableFilter.schema'

const makeSchema = () => z.object({
  equals: SalaryPeriodSchema.optional().nullable(),
  in: SalaryPeriodSchema.array().optional().nullable(),
  notIn: SalaryPeriodSchema.array().optional().nullable(),
  not: z.union([SalaryPeriodSchema, z.lazy(() => NestedEnumSalaryPeriodNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const EnumSalaryPeriodNullableFilterObjectSchema: z.ZodType<Prisma.EnumSalaryPeriodNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumSalaryPeriodNullableFilter>;
export const EnumSalaryPeriodNullableFilterObjectZodSchema = makeSchema();
