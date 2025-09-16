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
import { CompanyMemberUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './CompanyMemberUncheckedCreateNestedManyWithoutUserInput.schema';
import { ResumeUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ResumeUncheckedCreateNestedManyWithoutUserInput.schema';
import { JobApplicationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './JobApplicationUncheckedCreateNestedManyWithoutUserInput.schema';
import { CareerHistoryUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './CareerHistoryUncheckedCreateNestedManyWithoutUserInput.schema';
import { EducationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './EducationUncheckedCreateNestedManyWithoutUserInput.schema';
import { SkillUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './SkillUncheckedCreateNestedManyWithoutUsersInput.schema';
import { LanguageUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './LanguageUncheckedCreateNestedManyWithoutUsersInput.schema';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema'

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
  preferredLocation: z.union([z.lazy(() => UserCreatepreferredLocationInputObjectSchema), z.string().array()]),
  rightToWork: z.union([z.lazy(() => UserCreaterightToWorkInputObjectSchema), z.string().array()]),
  expectedSalary: z.string().optional().nullable(),
  jobClassification: z.union([z.lazy(() => UserCreatejobClassificationInputObjectSchema), JobClassSchema.array()]),
  approachability: UserApproachabilitySchema.optional().nullable(),
  companies: z.lazy(() => CompanyMemberUncheckedCreateNestedManyWithoutUserInputObjectSchema),
  resumes: z.lazy(() => ResumeUncheckedCreateNestedManyWithoutUserInputObjectSchema),
  JobApplication: z.lazy(() => JobApplicationUncheckedCreateNestedManyWithoutUserInputObjectSchema),
  previousCareers: z.lazy(() => CareerHistoryUncheckedCreateNestedManyWithoutUserInputObjectSchema),
  education: z.lazy(() => EducationUncheckedCreateNestedManyWithoutUserInputObjectSchema),
  skills: z.lazy(() => SkillUncheckedCreateNestedManyWithoutUsersInputObjectSchema),
  languages: z.lazy(() => LanguageUncheckedCreateNestedManyWithoutUsersInputObjectSchema),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema)
}).strict();
export const UserUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateInput>;
export const UserUncheckedCreateInputObjectZodSchema = makeSchema();
