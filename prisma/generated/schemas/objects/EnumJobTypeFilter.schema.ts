import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobTypeSchema } from '../enums/JobType.schema';
import { NestedEnumJobTypeFilterObjectSchema } from './NestedEnumJobTypeFilter.schema'

const makeSchema = () => z.object({
  equals: JobTypeSchema.optional(),
  in: JobTypeSchema.array().optional(),
  notIn: JobTypeSchema.array().optional(),
  not: z.union([JobTypeSchema, z.lazy(() => NestedEnumJobTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumJobTypeFilterObjectSchema: z.ZodType<Prisma.EnumJobTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumJobTypeFilter>;
export const EnumJobTypeFilterObjectZodSchema = makeSchema();
