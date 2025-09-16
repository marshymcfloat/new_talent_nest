import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { UserAvailabilityTypeSchema } from '../enums/UserAvailabilityType.schema';
import { UserCreatepreferredWorkTypesInputObjectSchema } from './UserCreatepreferredWorkTypesInput.schema';
import { JobTypeSchema } from '../enums/JobType.schema';
import { UserCreatepreferredLocationInputObjectSchema } from './UserCreatepreferredLocationInput.schema';
import { UserCreaterightToWorkInputObjectSchema } from './UserCreaterightToWorkInput.schema';
import { UserCreatejobClassificationInputObjectSchema } from './UserCreatejobClassificationInput.schema';
import { JobClassSchema } from '../enums/JobClass.schema';
import { UserApproachabilitySchema } from '../enums/UserApproachability.schema';
import { CompanyMemberCreateNestedManyWithoutUserInputObjectSchema } from './CompanyMemberCreateNestedManyWithoutUserInput.schema';
import { ResumeCreateNestedManyWithoutUserInputObjectSchema } from './ResumeCreateNestedManyWithoutUserInput.schema';
import { JobApplicationCreateNestedManyWithoutUserInputObjectSchema } from './JobApplicationCreateNestedManyWithoutUserInput.schema';
import { CareerHistoryCreateNestedManyWithoutUserInputObjectSchema } from './CareerHistoryCreateNestedManyWithoutUserInput.schema';
import { EducationCreateNestedManyWithoutUserInputObjectSchema } from './EducationCreateNestedManyWithoutUserInput.schema';
import { SkillCreateNestedManyWithoutUsersInputObjectSchema } from './SkillCreateNestedManyWithoutUsersInput.schema';
import { LanguageCreateNestedManyWithoutUsersInputObjectSchema } from './LanguageCreateNestedManyWithoutUsersInput.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  username: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  role: UserRoleSchema.optional(),
  summary: z.string().optional().nullable(),
  availability: UserAvailabilityTypeSchema.optional().nullable(),
  preferredWorkTypes: z.union([z.lazy(() => UserCreatepreferredWorkTypesInputObjectSchema), JobTypeSchema.array()]).optional(),
  preferredLocation: z.union([z.lazy(() => UserCreatepreferredLocationInputObjectSchema), z.string().array()]).optional(),
  rightToWork: z.union([z.lazy(() => UserCreaterightToWorkInputObjectSchema), z.string().array()]).optional(),
  expectedSalary: z.string().optional().nullable(),
  jobClassification: z.union([z.lazy(() => UserCreatejobClassificationInputObjectSchema), JobClassSchema.array()]).optional(),
  approachability: UserApproachabilitySchema.optional().nullable(),
  companies: z.lazy(() => CompanyMemberCreateNestedManyWithoutUserInputObjectSchema).optional(),
  resumes: z.lazy(() => ResumeCreateNestedManyWithoutUserInputObjectSchema).optional(),
  JobApplication: z.lazy(() => JobApplicationCreateNestedManyWithoutUserInputObjectSchema).optional(),
  previousCareers: z.lazy(() => CareerHistoryCreateNestedManyWithoutUserInputObjectSchema).optional(),
  education: z.lazy(() => EducationCreateNestedManyWithoutUserInputObjectSchema).optional(),
  skills: z.lazy(() => SkillCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  languages: z.lazy(() => LanguageCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutAccountsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutAccountsInput>;
export const UserCreateWithoutAccountsInputObjectZodSchema = makeSchema();
