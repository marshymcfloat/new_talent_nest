import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobTypeSchema } from '../enums/JobType.schema'

const schema = z.object({
  equals: JobTypeSchema.optional(),
  in: JobTypeSchema.array().optional(),
  notIn: JobTypeSchema.array().optional(),
  not: z.union([JobTypeSchema, z.lazy(() => NestedEnumJobTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumJobTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumJobTypeFilter> = schema as unknown as z.ZodType<Prisma.NestedEnumJobTypeFilter>;
export const NestedEnumJobTypeFilterObjectZodSchema = schema;
