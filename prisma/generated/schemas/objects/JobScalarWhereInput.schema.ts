import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumJobTypeFilterObjectSchema } from './EnumJobTypeFilter.schema';
import { JobTypeSchema } from '../enums/JobType.schema';
import { EnumJobClassFilterObjectSchema } from './EnumJobClassFilter.schema';
import { JobClassSchema } from '../enums/JobClass.schema';
import { EnumJobStatusFilterObjectSchema } from './EnumJobStatusFilter.schema';
import { JobStatusSchema } from '../enums/JobStatus.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  AND: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  OR: z.lazy(makeSchema).array().optional(),
  NOT: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  companyId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  location: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumJobTypeFilterObjectSchema), JobTypeSchema]).optional(),
  salary: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  jobClass: z.union([z.lazy(() => EnumJobClassFilterObjectSchema), JobClassSchema]).optional(),
  status: z.union([z.lazy(() => EnumJobStatusFilterObjectSchema), JobStatusSchema]).optional(),
  summary: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  qualifications: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  responsibilities: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  benefits: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  tags: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional()
}).strict();
export const JobScalarWhereInputObjectSchema: z.ZodType<Prisma.JobScalarWhereInput> = makeSchema() as unknown as z.ZodType<Prisma.JobScalarWhereInput>;
export const JobScalarWhereInputObjectZodSchema = makeSchema();
