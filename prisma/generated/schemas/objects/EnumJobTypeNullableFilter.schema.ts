import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobTypeSchema } from '../enums/JobType.schema';
import { NestedEnumJobTypeNullableFilterObjectSchema } from './NestedEnumJobTypeNullableFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  equals: JobTypeSchema.nullish(),
  in: JobTypeSchema.array().nullish(),
  notIn: JobTypeSchema.array().nullish(),
  not: z.union([JobTypeSchema, z.lazy(() => NestedEnumJobTypeNullableFilterObjectSchema)]).nullish()
}).strict();
export const EnumJobTypeNullableFilterObjectSchema: z.ZodType<Prisma.EnumJobTypeNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumJobTypeNullableFilter>;
export const EnumJobTypeNullableFilterObjectZodSchema = makeSchema();
