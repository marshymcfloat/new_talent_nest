import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobStatusSchema } from '../enums/JobStatus.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  equals: JobStatusSchema.optional(),
  in: JobStatusSchema.array().optional(),
  notIn: JobStatusSchema.array().optional(),
  not: z.union([JobStatusSchema, z.lazy(makeSchema)]).optional()
}).strict();
export const NestedEnumJobStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumJobStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.NestedEnumJobStatusFilter>;
export const NestedEnumJobStatusFilterObjectZodSchema = makeSchema();
