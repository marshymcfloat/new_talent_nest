import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ApplicationStatusSchema } from '../enums/ApplicationStatus.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  equals: ApplicationStatusSchema.optional(),
  in: ApplicationStatusSchema.array().optional(),
  notIn: ApplicationStatusSchema.array().optional(),
  not: z.union([ApplicationStatusSchema, z.lazy(makeSchema)]).optional()
}).strict();
export const NestedEnumApplicationStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumApplicationStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.NestedEnumApplicationStatusFilter>;
export const NestedEnumApplicationStatusFilterObjectZodSchema = makeSchema();
