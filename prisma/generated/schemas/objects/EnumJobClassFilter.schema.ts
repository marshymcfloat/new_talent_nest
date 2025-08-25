import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobClassSchema } from '../enums/JobClass.schema';
import { NestedEnumJobClassFilterObjectSchema } from './NestedEnumJobClassFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  equals: JobClassSchema.optional(),
  in: JobClassSchema.array().optional(),
  notIn: JobClassSchema.array().optional(),
  not: z.union([JobClassSchema, z.lazy(() => NestedEnumJobClassFilterObjectSchema)]).optional()
}).strict();
export const EnumJobClassFilterObjectSchema: z.ZodType<Prisma.EnumJobClassFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumJobClassFilter>;
export const EnumJobClassFilterObjectZodSchema = makeSchema();
