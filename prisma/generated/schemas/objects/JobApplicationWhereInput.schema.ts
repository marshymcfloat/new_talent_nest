import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumApplicationStatusFilterObjectSchema } from './EnumApplicationStatusFilter.schema';
import { ApplicationStatusSchema } from '../enums/ApplicationStatus.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ResumeScalarRelationFilterObjectSchema } from './ResumeScalarRelationFilter.schema';
import { ResumeWhereInputObjectSchema } from './ResumeWhereInput.schema';
import { JobScalarRelationFilterObjectSchema } from './JobScalarRelationFilter.schema';
import { JobWhereInputObjectSchema } from './JobWhereInput.schema';
import { UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { AnswerListRelationFilterObjectSchema } from './AnswerListRelationFilter.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => JobApplicationWhereInputObjectSchema), z.lazy(() => JobApplicationWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => JobApplicationWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => JobApplicationWhereInputObjectSchema), z.lazy(() => JobApplicationWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  jobId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  resumeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumApplicationStatusFilterObjectSchema), ApplicationStatusSchema]).optional(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  isArchived: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  resume: z.union([z.lazy(() => ResumeScalarRelationFilterObjectSchema), z.lazy(() => ResumeWhereInputObjectSchema)]).optional(),
  Job: z.union([z.lazy(() => JobScalarRelationFilterObjectSchema), z.lazy(() => JobWhereInputObjectSchema)]).optional(),
  User: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  answers: z.lazy(() => AnswerListRelationFilterObjectSchema).optional()
}).strict();
export const JobApplicationWhereInputObjectSchema: z.ZodType<Prisma.JobApplicationWhereInput> = schema as unknown as z.ZodType<Prisma.JobApplicationWhereInput>;
export const JobApplicationWhereInputObjectZodSchema = schema;
