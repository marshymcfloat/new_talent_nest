import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { EnumUserRoleFieldUpdateOperationsInputObjectSchema } from './EnumUserRoleFieldUpdateOperationsInput.schema';
import { UserAvailabilityTypeSchema } from '../enums/UserAvailabilityType.schema';
import { NullableEnumUserAvailabilityTypeFieldUpdateOperationsInputObjectSchema } from './NullableEnumUserAvailabilityTypeFieldUpdateOperationsInput.schema';
import { JobTypeSchema } from '../enums/JobType.schema';
import { NullableEnumJobTypeFieldUpdateOperationsInputObjectSchema } from './NullableEnumJobTypeFieldUpdateOperationsInput.schema';
import { UserUpdatepreferredLocationInputObjectSchema } from './UserUpdatepreferredLocationInput.schema';
import { UserUpdaterightToWorkInputObjectSchema } from './UserUpdaterightToWorkInput.schema';
import { UserUpdatejobClassificationInputObjectSchema } from './UserUpdatejobClassificationInput.schema';
import { JobClassSchema } from '../enums/JobClass.schema';
import { CompanyMemberUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './CompanyMemberUncheckedUpdateManyWithoutUserNestedInput.schema';
import { ResumeUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ResumeUncheckedUpdateManyWithoutUserNestedInput.schema';
import { JobApplicationUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './JobApplicationUncheckedUpdateManyWithoutUserNestedInput.schema';
import { CareerHistoryUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './CareerHistoryUncheckedUpdateManyWithoutUserNestedInput.schema';
import { EducationUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './EducationUncheckedUpdateManyWithoutUserNestedInput.schema';
import { SkillUncheckedUpdateManyWithoutUsersNestedInputObjectSchema } from './SkillUncheckedUpdateManyWithoutUsersNestedInput.schema';
import { LanguageUncheckedUpdateManyWithoutUsersNestedInputObjectSchema } from './LanguageUncheckedUpdateManyWithoutUsersNestedInput.schema';
import { SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUncheckedUpdateManyWithoutUserNestedInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  emailVerified: z.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).nullish(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  username: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  password: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  role: z.union([UserRoleSchema, z.lazy(() => EnumUserRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  summary: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  availability: z.union([UserAvailabilityTypeSchema, z.lazy(() => NullableEnumUserAvailabilityTypeFieldUpdateOperationsInputObjectSchema)]).nullish(),
  preferredWorkType: z.union([JobTypeSchema, z.lazy(() => NullableEnumJobTypeFieldUpdateOperationsInputObjectSchema)]).nullish(),
  preferredLocation: z.union([z.lazy(() => UserUpdatepreferredLocationInputObjectSchema), z.string().array()]).optional(),
  rightToWork: z.union([z.lazy(() => UserUpdaterightToWorkInputObjectSchema), z.string().array()]).optional(),
  expectedSalary: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  jobClassification: z.union([z.lazy(() => UserUpdatejobClassificationInputObjectSchema), JobClassSchema.array()]).optional(),
  companies: z.lazy(() => CompanyMemberUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  resumes: z.lazy(() => ResumeUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  JobApplication: z.lazy(() => JobApplicationUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  previousCareers: z.lazy(() => CareerHistoryUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  education: z.lazy(() => EducationUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  skills: z.lazy(() => SkillUncheckedUpdateManyWithoutUsersNestedInputObjectSchema).optional(),
  languages: z.lazy(() => LanguageUncheckedUpdateManyWithoutUsersNestedInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUncheckedUpdateWithoutAccountsInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput>;
export const UserUncheckedUpdateWithoutAccountsInputObjectZodSchema = makeSchema();
