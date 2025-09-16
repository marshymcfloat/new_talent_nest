import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobTypeSchema } from '../enums/JobType.schema'

const makeSchema = () => z.object({
  equals: JobTypeSchema.array().optional().nullable(),
  has: JobTypeSchema.optional().nullable(),
  hasEvery: JobTypeSchema.array().optional(),
  hasSome: JobTypeSchema.array().optional(),
  isEmpty: z.boolean().optional()
}).strict();
export const EnumJobTypeNullableListFilterObjectSchema: z.ZodType<Prisma.EnumJobTypeNullableListFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumJobTypeNullableListFilter>;
export const EnumJobTypeNullableListFilterObjectZodSchema = makeSchema();
