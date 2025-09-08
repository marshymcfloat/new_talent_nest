import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobTypeSchema } from '../enums/JobType.schema';
import { NestedEnumJobTypeNullableFilterObjectSchema } from './NestedEnumJobTypeNullableFilter.schema'

const makeSchema = () => z.object({
  equals: JobTypeSchema.optional().nullable(),
  in: JobTypeSchema.array().optional().nullable(),
  notIn: JobTypeSchema.array().optional().nullable(),
  not: z.union([JobTypeSchema, z.lazy(() => NestedEnumJobTypeNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const EnumJobTypeNullableFilterObjectSchema: z.ZodType<Prisma.EnumJobTypeNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumJobTypeNullableFilter>;
export const EnumJobTypeNullableFilterObjectZodSchema = makeSchema();
