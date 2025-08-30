import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAvailabilityTypeSchema } from '../enums/UserAvailabilityType.schema';
import { JobTypeSchema } from '../enums/JobType.schema';
import { UserCreatepreferredLocationInputObjectSchema } from './UserCreatepreferredLocationInput.schema';
import { UserCreaterightToWorkInputObjectSchema } from './UserCreaterightToWorkInput.schema';
import { UserCreatejobClassificationInputObjectSchema } from './UserCreatejobClassificationInput.schema';
import { JobClassSchema } from '../enums/JobClass.schema';
import { ResumeCreateNestedManyWithoutUserInputObjectSchema } from './ResumeCreateNestedManyWithoutUserInput.schema';
import { JobApplicationCreateNestedManyWithoutUserInputObjectSchema } from './JobApplicationCreateNestedManyWithoutUserInput.schema';
import { EducationCreateNestedManyWithoutUserInputObjectSchema } from './EducationCreateNestedManyWithoutUserInput.schema';
import { SkillCreateNestedManyWithoutUsersInputObjectSchema } from './SkillCreateNestedManyWithoutUsersInput.schema';
import { LanguageCreateNestedManyWithoutUsersInputObjectSchema } from './LanguageCreateNestedManyWithoutUsersInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  emailVerified: z.date().nullish(),
  image: z.string().nullish(),
  username: z.string().nullish(),
  password: z.string().nullish(),
  summary: z.string().nullish(),
  availability: UserAvailabilityTypeSchema.nullish(),
  preferredWorkType: JobTypeSchema.nullish(),
  preferredLocation: z.union([z.lazy(() => UserCreatepreferredLocationInputObjectSchema), z.string().array()]).optional(),
  rightToWork: z.union([z.lazy(() => UserCreaterightToWorkInputObjectSchema), z.string().array()]).optional(),
  expectedSalary: z.string().nullish(),
  jobClassification: z.union([z.lazy(() => UserCreatejobClassificationInputObjectSchema), JobClassSchema.array()]).optional(),
  resumes: z.lazy(() => ResumeCreateNestedManyWithoutUserInputObjectSchema).optional(),
  JobApplication: z.lazy(() => JobApplicationCreateNestedManyWithoutUserInputObjectSchema).optional(),
  education: z.lazy(() => EducationCreateNestedManyWithoutUserInputObjectSchema).optional(),
  skills: z.lazy(() => SkillCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  languages: z.lazy(() => LanguageCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutPreviousCareersInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutPreviousCareersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutPreviousCareersInput>;
export const UserCreateWithoutPreviousCareersInputObjectZodSchema = makeSchema();
