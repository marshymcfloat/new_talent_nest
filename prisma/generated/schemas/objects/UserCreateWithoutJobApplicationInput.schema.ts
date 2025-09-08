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
  preferredLocation: z.union([z.lazy(() => UserCreatepreferredLocationInputObjectSchema), z.string().array()]).optional(),
  rightToWork: z.union([z.lazy(() => UserCreaterightToWorkInputObjectSchema), z.string().array()]).optional(),
  expectedSalary: z.string().optional().nullable(),
  jobClassification: z.union([z.lazy(() => UserCreatejobClassificationInputObjectSchema), JobClassSchema.array()]).optional(),
  companies: z.lazy(() => CompanyMemberCreateNestedManyWithoutUserInputObjectSchema).optional(),
  resumes: z.lazy(() => ResumeCreateNestedManyWithoutUserInputObjectSchema).optional(),
  previousCareers: z.lazy(() => CareerHistoryCreateNestedManyWithoutUserInputObjectSchema).optional(),
  education: z.lazy(() => EducationCreateNestedManyWithoutUserInputObjectSchema).optional(),
  skills: z.lazy(() => SkillCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  languages: z.lazy(() => LanguageCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutJobApplicationInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutJobApplicationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutJobApplicationInput>;
export const UserCreateWithoutJobApplicationInputObjectZodSchema = makeSchema();
