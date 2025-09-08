import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumJobTypeWithAggregatesFilterObjectSchema } from './EnumJobTypeWithAggregatesFilter.schema';
import { JobTypeSchema } from '../enums/JobType.schema';
import { IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { EnumSalaryPeriodNullableWithAggregatesFilterObjectSchema } from './EnumSalaryPeriodNullableWithAggregatesFilter.schema';
import { SalaryPeriodSchema } from '../enums/SalaryPeriod.schema';
import { EnumJobClassWithAggregatesFilterObjectSchema } from './EnumJobClassWithAggregatesFilter.schema';
import { JobClassSchema } from '../enums/JobClass.schema';
import { EnumJobStatusWithAggregatesFilterObjectSchema } from './EnumJobStatusWithAggregatesFilter.schema';
import { JobStatusSchema } from '../enums/JobStatus.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => JobScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => JobScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => JobScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => JobScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => JobScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  companyId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  location: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumJobTypeWithAggregatesFilterObjectSchema), JobTypeSchema]).optional(),
  minSalary: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  maxSalary: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  currency: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  payPeriod: z.union([z.lazy(() => EnumSalaryPeriodNullableWithAggregatesFilterObjectSchema), SalaryPeriodSchema]).optional().nullable(),
  jobClass: z.union([z.lazy(() => EnumJobClassWithAggregatesFilterObjectSchema), JobClassSchema]).optional(),
  status: z.union([z.lazy(() => EnumJobStatusWithAggregatesFilterObjectSchema), JobStatusSchema]).optional(),
  summary: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  qualifications: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  responsibilities: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  benefits: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  tags: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const JobScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.JobScalarWhereWithAggregatesInput> = schema as unknown as z.ZodType<Prisma.JobScalarWhereWithAggregatesInput>;
export const JobScalarWhereWithAggregatesInputObjectZodSchema = schema;
