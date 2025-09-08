import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobClassSchema } from '../enums/JobClass.schema'

const makeSchema = () => z.object({
  equals: JobClassSchema.array().optional().nullable(),
  has: JobClassSchema.optional().nullable(),
  hasEvery: JobClassSchema.array().optional(),
  hasSome: JobClassSchema.array().optional(),
  isEmpty: z.boolean().optional()
}).strict();
export const EnumJobClassNullableListFilterObjectSchema: z.ZodType<Prisma.EnumJobClassNullableListFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumJobClassNullableListFilter>;
export const EnumJobClassNullableListFilterObjectZodSchema = makeSchema();
