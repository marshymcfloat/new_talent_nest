import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobTypeSchema } from '../enums/JobType.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  equals: JobTypeSchema.nullish(),
  in: JobTypeSchema.array().nullish(),
  notIn: JobTypeSchema.array().nullish(),
  not: z.union([JobTypeSchema, z.lazy(makeSchema)]).nullish()
}).strict();
export const NestedEnumJobTypeNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumJobTypeNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.NestedEnumJobTypeNullableFilter>;
export const NestedEnumJobTypeNullableFilterObjectZodSchema = makeSchema();
