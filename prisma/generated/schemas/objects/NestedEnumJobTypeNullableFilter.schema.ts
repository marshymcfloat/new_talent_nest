import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobTypeSchema } from '../enums/JobType.schema'

const schema = z.object({
  equals: JobTypeSchema.optional().nullable(),
  in: JobTypeSchema.array().optional().nullable(),
  notIn: JobTypeSchema.array().optional().nullable(),
  not: z.union([JobTypeSchema, z.lazy(() => NestedEnumJobTypeNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumJobTypeNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumJobTypeNullableFilter> = schema as unknown as z.ZodType<Prisma.NestedEnumJobTypeNullableFilter>;
export const NestedEnumJobTypeNullableFilterObjectZodSchema = schema;
