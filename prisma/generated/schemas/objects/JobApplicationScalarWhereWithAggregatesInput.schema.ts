import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumApplicationStatusWithAggregatesFilterObjectSchema } from './EnumApplicationStatusWithAggregatesFilter.schema';
import { ApplicationStatusSchema } from '../enums/ApplicationStatus.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  AND: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  OR: z.lazy(makeSchema).array().optional(),
  NOT: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  jobId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  resumeId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumApplicationStatusWithAggregatesFilterObjectSchema), ApplicationStatusSchema]).optional(),
  notes: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).nullish(),
  isArchived: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()]).optional()
}).strict();
export const JobApplicationScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.JobApplicationScalarWhereWithAggregatesInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationScalarWhereWithAggregatesInput>;
export const JobApplicationScalarWhereWithAggregatesInputObjectZodSchema = makeSchema();
