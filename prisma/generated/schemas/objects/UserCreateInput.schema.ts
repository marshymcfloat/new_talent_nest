import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { UserAvailabilityTypeSchema } from '../enums/UserAvailabilityType.schema';
import { JobTypeSchema } from '../enums/JobType.schema';
import { UserCreatepreferredLocationInputObjectSchema } from './UserCreatepreferredLocationInput.schema';
import { UserCreaterightToWorkInputObjectSchema } from './UserCreaterightToWorkInput.schema';
import { UserCreatejobClassificationInputObjectSchema } from './UserCreatejobClassificationInput.schema';
import { JobClassSchema } from '../enums/JobClass.schema';
import { CompanyMemberCreateNestedManyWithoutUserInputObjectSchema } from './CompanyMemberCreateNestedManyWithoutUserInput.schema';
import { ResumeCreateNestedManyWithoutUserInputObjectSchema } from './ResumeCreateNestedManyWithoutUserInput.schema';
import { JobApplicationCreateNestedManyWithoutUserInputObjectSchema } from './JobApplicationCreateNestedManyWithoutUserInput.schema';
import { CareerHistoryCreateNestedManyWithoutUserInputObjectSchema } from './CareerHistoryCreateNestedManyWithoutUserInput.schema';
import { EducationCreateNestedManyWithoutUserInputObjectSchema } from './EducationCreateNestedManyWithoutUserInput.schema';
import { SkillCreateNestedManyWithoutUsersInputObjectSchema } from './SkillCreateNestedManyWithoutUsersInput.schema';
import { LanguageCreateNestedManyWithoutUsersInputObjectSchema } from './LanguageCreateNestedManyWithoutUsersInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
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
  preferredWorkType: JobTypeSchema.optional().nullable(),
  preferredLocation: z.union([z.lazy(() => UserCreatepreferredLocationInputObjectSchema), z.string().array()]),
  rightToWork: z.union([z.lazy(() => UserCreaterightToWorkInputObjectSchema), z.string().array()]),
  expectedSalary: z.string().optional().nullable(),
  jobClassification: z.union([z.lazy(() => UserCreatejobClassificationInputObjectSchema), JobClassSchema.array()]),
  companies: z.lazy(() => CompanyMemberCreateNestedManyWithoutUserInputObjectSchema),
  resumes: z.lazy(() => ResumeCreateNestedManyWithoutUserInputObjectSchema),
  JobApplication: z.lazy(() => JobApplicationCreateNestedManyWithoutUserInputObjectSchema),
  previousCareers: z.lazy(() => CareerHistoryCreateNestedManyWithoutUserInputObjectSchema),
  education: z.lazy(() => EducationCreateNestedManyWithoutUserInputObjectSchema),
  skills: z.lazy(() => SkillCreateNestedManyWithoutUsersInputObjectSchema),
  languages: z.lazy(() => LanguageCreateNestedManyWithoutUsersInputObjectSchema),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema)
}).strict();
export const UserCreateInputObjectSchema: z.ZodType<Prisma.UserCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateInput>;
export const UserCreateInputObjectZodSchema = makeSchema();
