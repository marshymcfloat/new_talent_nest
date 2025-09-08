import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumJobTypeFilterObjectSchema } from './EnumJobTypeFilter.schema';
import { JobTypeSchema } from '../enums/JobType.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { EnumSalaryPeriodNullableFilterObjectSchema } from './EnumSalaryPeriodNullableFilter.schema';
import { SalaryPeriodSchema } from '../enums/SalaryPeriod.schema';
import { EnumJobClassFilterObjectSchema } from './EnumJobClassFilter.schema';
import { JobClassSchema } from '../enums/JobClass.schema';
import { EnumJobStatusFilterObjectSchema } from './EnumJobStatusFilter.schema';
import { JobStatusSchema } from '../enums/JobStatus.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => JobScalarWhereInputObjectSchema), z.lazy(() => JobScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => JobScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => JobScalarWhereInputObjectSchema), z.lazy(() => JobScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  companyId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  location: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumJobTypeFilterObjectSchema), JobTypeSchema]).optional(),
  minSalary: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  maxSalary: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  currency: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  payPeriod: z.union([z.lazy(() => EnumSalaryPeriodNullableFilterObjectSchema), SalaryPeriodSchema]).optional().nullable(),
  jobClass: z.union([z.lazy(() => EnumJobClassFilterObjectSchema), JobClassSchema]).optional(),
  status: z.union([z.lazy(() => EnumJobStatusFilterObjectSchema), JobStatusSchema]).optional(),
  summary: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  qualifications: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  responsibilities: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  benefits: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  tags: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const JobScalarWhereInputObjectSchema: z.ZodType<Prisma.JobScalarWhereInput> = schema as unknown as z.ZodType<Prisma.JobScalarWhereInput>;
export const JobScalarWhereInputObjectZodSchema = schema;
