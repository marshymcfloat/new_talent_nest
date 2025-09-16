import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { EnumUserRoleWithAggregatesFilterObjectSchema } from './EnumUserRoleWithAggregatesFilter.schema';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { EnumUserAvailabilityTypeNullableWithAggregatesFilterObjectSchema } from './EnumUserAvailabilityTypeNullableWithAggregatesFilter.schema';
import { UserAvailabilityTypeSchema } from '../enums/UserAvailabilityType.schema';
import { EnumJobTypeNullableListFilterObjectSchema } from './EnumJobTypeNullableListFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { EnumJobClassNullableListFilterObjectSchema } from './EnumJobClassNullableListFilter.schema';
import { EnumUserApproachabilityNullableWithAggregatesFilterObjectSchema } from './EnumUserApproachabilityNullableWithAggregatesFilter.schema';
import { UserApproachabilitySchema } from '../enums/UserApproachability.schema'

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
  preferredWorkTypes: z.lazy(() => EnumJobTypeNullableListFilterObjectSchema).optional(),
  preferredLocation: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  rightToWork: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  expectedSalary: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  jobClassification: z.lazy(() => EnumJobClassNullableListFilterObjectSchema).optional(),
  approachability: z.union([z.lazy(() => EnumUserApproachabilityNullableWithAggregatesFilterObjectSchema), UserApproachabilitySchema]).optional().nullable()
}).strict();
export const UserScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = schema as unknown as z.ZodType<Prisma.UserScalarWhereWithAggregatesInput>;
export const UserScalarWhereWithAggregatesInputObjectZodSchema = schema;
