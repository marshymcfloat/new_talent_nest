import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobStatusSchema } from '../enums/JobStatus.schema'

const schema = z.object({
  equals: JobStatusSchema.optional(),
  in: JobStatusSchema.array().optional(),
  notIn: JobStatusSchema.array().optional(),
  not: z.union([JobStatusSchema, z.lazy(() => NestedEnumJobStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumJobStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumJobStatusFilter> = schema as unknown as z.ZodType<Prisma.NestedEnumJobStatusFilter>;
export const NestedEnumJobStatusFilterObjectZodSchema = schema;
