import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumJobTypeWithAggregatesFilterObjectSchema } from './EnumJobTypeWithAggregatesFilter.schema';
import { JobTypeSchema } from '../enums/JobType.schema';
import { EnumJobClassWithAggregatesFilterObjectSchema } from './EnumJobClassWithAggregatesFilter.schema';
import { JobClassSchema } from '../enums/JobClass.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  AND: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  OR: z.lazy(makeSchema).array().optional(),
  NOT: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  companyId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  location: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumJobTypeWithAggregatesFilterObjectSchema), JobTypeSchema]).optional(),
  salary: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  jobClass: z.union([z.lazy(() => EnumJobClassWithAggregatesFilterObjectSchema), JobClassSchema]).optional(),
  summary: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  qualifications: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  responsibilities: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  benefits: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  tags: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()]).optional()
}).strict();
export const JobScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.JobScalarWhereWithAggregatesInput> = makeSchema() as unknown as z.ZodType<Prisma.JobScalarWhereWithAggregatesInput>;
export const JobScalarWhereWithAggregatesInputObjectZodSchema = makeSchema();
