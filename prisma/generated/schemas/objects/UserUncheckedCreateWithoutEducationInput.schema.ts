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
  preferredLocation: z.union([z.lazy(() => UserCreatepreferredLocationInputObjectSchema), z.string().array()]).optional(),
  rightToWork: z.union([z.lazy(() => UserCreaterightToWorkInputObjectSchema), z.string().array()]).optional(),
  expectedSalary: z.string().optional().nullable(),
  jobClassification: z.union([z.lazy(() => UserCreatejobClassificationInputObjectSchema), JobClassSchema.array()]).optional(),
  approachability: UserApproachabilitySchema.optional().nullable(),
  companies: z.lazy(() => CompanyMemberUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  resumes: z.lazy(() => ResumeUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  JobApplication: z.lazy(() => JobApplicationUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  previousCareers: z.lazy(() => CareerHistoryUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  skills: z.lazy(() => SkillUncheckedCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  languages: z.lazy(() => LanguageUncheckedCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutEducationInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutEducationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutEducationInput>;
export const UserUncheckedCreateWithoutEducationInputObjectZodSchema = makeSchema();
