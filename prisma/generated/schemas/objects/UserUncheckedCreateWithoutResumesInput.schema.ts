import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAvailabilityTypeSchema } from '../enums/UserAvailabilityType.schema';
import { JobTypeSchema } from '../enums/JobType.schema';
import { UserCreatepreferredLocationInputObjectSchema } from './UserCreatepreferredLocationInput.schema';
import { UserCreaterightToWorkInputObjectSchema } from './UserCreaterightToWorkInput.schema';
import { UserCreatejobClassificationInputObjectSchema } from './UserCreatejobClassificationInput.schema';
import { JobClassSchema } from '../enums/JobClass.schema';
import { JobApplicationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './JobApplicationUncheckedCreateNestedManyWithoutUserInput.schema';
import { CareerHistoryUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './CareerHistoryUncheckedCreateNestedManyWithoutUserInput.schema';
import { EducationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './EducationUncheckedCreateNestedManyWithoutUserInput.schema';
import { SkillUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './SkillUncheckedCreateNestedManyWithoutUsersInput.schema';
import { LanguageUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './LanguageUncheckedCreateNestedManyWithoutUsersInput.schema';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema'

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
  JobApplication: z.lazy(() => JobApplicationUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  previousCareers: z.lazy(() => CareerHistoryUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  education: z.lazy(() => EducationUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  skills: z.lazy(() => SkillUncheckedCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  languages: z.lazy(() => LanguageUncheckedCreateNestedManyWithoutUsersInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutResumesInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutResumesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutResumesInput>;
export const UserUncheckedCreateWithoutResumesInputObjectZodSchema = makeSchema();
