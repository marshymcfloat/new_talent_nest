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
import { EnumJobClassNullableListFilterObjectSchema } from './EnumJobClassNullableListFilter.schema';
import { CompanyMemberListRelationFilterObjectSchema } from './CompanyMemberListRelationFilter.schema';
import { ResumeListRelationFilterObjectSchema } from './ResumeListRelationFilter.schema';
import { JobApplicationListRelationFilterObjectSchema } from './JobApplicationListRelationFilter.schema';
import { CareerHistoryListRelationFilterObjectSchema } from './CareerHistoryListRelationFilter.schema';
import { EducationListRelationFilterObjectSchema } from './EducationListRelationFilter.schema';
import { SkillListRelationFilterObjectSchema } from './SkillListRelationFilter.schema';
import { LanguageListRelationFilterObjectSchema } from './LanguageListRelationFilter.schema';
import { AccountListRelationFilterObjectSchema } from './AccountListRelationFilter.schema';
import { SessionListRelationFilterObjectSchema } from './SessionListRelationFilter.schema'

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
  role: z.union([z.lazy(() => EnumUserRoleFilterObjectSchema), UserRoleSchema]).optional(),
  summary: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  availability: z.union([z.lazy(() => EnumUserAvailabilityTypeNullableFilterObjectSchema), UserAvailabilityTypeSchema]).nullish(),
  preferredWorkType: z.union([z.lazy(() => EnumJobTypeNullableFilterObjectSchema), JobTypeSchema]).nullish(),
  preferredLocation: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  rightToWork: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  expectedSalary: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).nullish(),
  jobClassification: z.lazy(() => EnumJobClassNullableListFilterObjectSchema).optional(),
  companies: z.lazy(() => CompanyMemberListRelationFilterObjectSchema).optional(),
  resumes: z.lazy(() => ResumeListRelationFilterObjectSchema).optional(),
  JobApplication: z.lazy(() => JobApplicationListRelationFilterObjectSchema).optional(),
  previousCareers: z.lazy(() => CareerHistoryListRelationFilterObjectSchema).optional(),
  education: z.lazy(() => EducationListRelationFilterObjectSchema).optional(),
  skills: z.lazy(() => SkillListRelationFilterObjectSchema).optional(),
  languages: z.lazy(() => LanguageListRelationFilterObjectSchema).optional(),
  accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional()
}).strict();
export const UserWhereInputObjectSchema: z.ZodType<Prisma.UserWhereInput> = makeSchema() as unknown as z.ZodType<Prisma.UserWhereInput>;
export const UserWhereInputObjectZodSchema = makeSchema();
