import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumApplicationStatusFilterObjectSchema } from './EnumApplicationStatusFilter.schema';
import { ApplicationStatusSchema } from '../enums/ApplicationStatus.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  AND: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  OR: z.lazy(makeSchema).array().optional(),
  NOT: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  jobId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  resumeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumApplicationStatusFilterObjectSchema), ApplicationStatusSchema]).optional(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  isArchived: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional()
}).strict();
export const JobApplicationScalarWhereInputObjectSchema: z.ZodType<Prisma.JobApplicationScalarWhereInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationScalarWhereInput>;
export const JobApplicationScalarWhereInputObjectZodSchema = makeSchema();
