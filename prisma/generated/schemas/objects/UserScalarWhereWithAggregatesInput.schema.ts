import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { EnumUserRoleWithAggregatesFilterObjectSchema } from './EnumUserRoleWithAggregatesFilter.schema';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { EnumUserAvailabilityTypeNullableWithAggregatesFilterObjectSchema } from './EnumUserAvailabilityTypeNullableWithAggregatesFilter.schema';
import { UserAvailabilityTypeSchema } from '../enums/UserAvailabilityType.schema';
import { EnumJobTypeNullableWithAggregatesFilterObjectSchema } from './EnumJobTypeNullableWithAggregatesFilter.schema';
import { JobTypeSchema } from '../enums/JobType.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { EnumJobClassNullableListFilterObjectSchema } from './EnumJobClassNullableListFilter.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  email: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  emailVerified: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  image: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  username: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  password: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  role: z.union([z.lazy(() => EnumUserRoleWithAggregatesFilterObjectSchema), UserRoleSchema]).optional(),
  summary: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  availability: z.union([z.lazy(() => EnumUserAvailabilityTypeNullableWithAggregatesFilterObjectSchema), UserAvailabilityTypeSchema]).optional().nullable(),
  preferredWorkType: z.union([z.lazy(() => EnumJobTypeNullableWithAggregatesFilterObjectSchema), JobTypeSchema]).optional().nullable(),
  preferredLocation: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  rightToWork: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  expectedSalary: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  jobClassification: z.lazy(() => EnumJobClassNullableListFilterObjectSchema).optional()
}).strict();
export const UserScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = schema as unknown as z.ZodType<Prisma.UserScalarWhereWithAggregatesInput>;
export const UserScalarWhereWithAggregatesInputObjectZodSchema = schema;
