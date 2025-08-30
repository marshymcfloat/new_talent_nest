import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { EnumUserAvailabilityTypeNullableFilterObjectSchema } from './EnumUserAvailabilityTypeNullableFilter.schema';
import { UserAvailabilityTypeSchema } from '../enums/UserAvailabilityType.schema';
import { EnumJobTypeNullableFilterObjectSchema } from './EnumJobTypeNullableFilter.schema';
import { JobTypeSchema } from '../enums/JobType.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { EnumJobClassNullableListFilterObjectSchema } from './EnumJobClassNullableListFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  AND: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  OR: z.lazy(makeSchema).array().optional(),
  NOT: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  email: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  emailVerified: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()]).nullish(),
  image: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  username: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  password: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  summary: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  availability: z.union([z.lazy(() => EnumUserAvailabilityTypeNullableFilterObjectSchema), UserAvailabilityTypeSchema]).nullish(),
  preferredWorkType: z.union([z.lazy(() => EnumJobTypeNullableFilterObjectSchema), JobTypeSchema]).nullish(),
  preferredLocation: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  rightToWork: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  expectedSalary: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  jobClassification: z.lazy(() => EnumJobClassNullableListFilterObjectSchema).optional()
}).strict();
export const UserScalarWhereInputObjectSchema: z.ZodType<Prisma.UserScalarWhereInput> = makeSchema() as unknown as z.ZodType<Prisma.UserScalarWhereInput>;
export const UserScalarWhereInputObjectZodSchema = makeSchema();
