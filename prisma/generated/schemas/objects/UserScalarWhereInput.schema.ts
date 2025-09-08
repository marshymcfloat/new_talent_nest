import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { EnumUserRoleFilterObjectSchema } from './EnumUserRoleFilter.schema';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { EnumUserAvailabilityTypeNullableFilterObjectSchema } from './EnumUserAvailabilityTypeNullableFilter.schema';
import { UserAvailabilityTypeSchema } from '../enums/UserAvailabilityType.schema';
import { EnumJobTypeNullableFilterObjectSchema } from './EnumJobTypeNullableFilter.schema';
import { JobTypeSchema } from '../enums/JobType.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { EnumJobClassNullableListFilterObjectSchema } from './EnumJobClassNullableListFilter.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => UserScalarWhereInputObjectSchema), z.lazy(() => UserScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserScalarWhereInputObjectSchema), z.lazy(() => UserScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  email: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  emailVerified: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  image: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  username: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  password: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  role: z.union([z.lazy(() => EnumUserRoleFilterObjectSchema), UserRoleSchema]).optional(),
  summary: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  availability: z.union([z.lazy(() => EnumUserAvailabilityTypeNullableFilterObjectSchema), UserAvailabilityTypeSchema]).optional().nullable(),
  preferredWorkType: z.union([z.lazy(() => EnumJobTypeNullableFilterObjectSchema), JobTypeSchema]).optional().nullable(),
  preferredLocation: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  rightToWork: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  expectedSalary: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  jobClassification: z.lazy(() => EnumJobClassNullableListFilterObjectSchema).optional()
}).strict();
export const UserScalarWhereInputObjectSchema: z.ZodType<Prisma.UserScalarWhereInput> = schema as unknown as z.ZodType<Prisma.UserScalarWhereInput>;
export const UserScalarWhereInputObjectZodSchema = schema;
