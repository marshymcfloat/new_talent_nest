import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumApplicationStatusWithAggregatesFilterObjectSchema } from './EnumApplicationStatusWithAggregatesFilter.schema';
import { ApplicationStatusSchema } from '../enums/ApplicationStatus.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => JobApplicationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => JobApplicationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => JobApplicationScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => JobApplicationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => JobApplicationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  jobId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  resumeId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumApplicationStatusWithAggregatesFilterObjectSchema), ApplicationStatusSchema]).optional(),
  notes: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  isArchived: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const JobApplicationScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.JobApplicationScalarWhereWithAggregatesInput> = schema as unknown as z.ZodType<Prisma.JobApplicationScalarWhereWithAggregatesInput>;
export const JobApplicationScalarWhereWithAggregatesInputObjectZodSchema = schema;
