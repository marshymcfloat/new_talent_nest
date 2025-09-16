import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { UserRoleSchema } from '../enums/UserRole.schema';
import { EnumUserRoleFieldUpdateOperationsInputObjectSchema } from './EnumUserRoleFieldUpdateOperationsInput.schema';
import { UserAvailabilityTypeSchema } from '../enums/UserAvailabilityType.schema';
import { NullableEnumUserAvailabilityTypeFieldUpdateOperationsInputObjectSchema } from './NullableEnumUserAvailabilityTypeFieldUpdateOperationsInput.schema';
import { UserUpdatepreferredWorkTypesInputObjectSchema } from './UserUpdatepreferredWorkTypesInput.schema';
import { JobTypeSchema } from '../enums/JobType.schema';
import { UserUpdatepreferredLocationInputObjectSchema } from './UserUpdatepreferredLocationInput.schema';
import { UserUpdaterightToWorkInputObjectSchema } from './UserUpdaterightToWorkInput.schema';
import { UserUpdatejobClassificationInputObjectSchema } from './UserUpdatejobClassificationInput.schema';
import { JobClassSchema } from '../enums/JobClass.schema';
import { UserApproachabilitySchema } from '../enums/UserApproachability.schema';
import { NullableEnumUserApproachabilityFieldUpdateOperationsInputObjectSchema } from './NullableEnumUserApproachabilityFieldUpdateOperationsInput.schema';
import { CompanyMemberUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './CompanyMemberUncheckedUpdateManyWithoutUserNestedInput.schema';
import { ResumeUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ResumeUncheckedUpdateManyWithoutUserNestedInput.schema';
import { JobApplicationUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './JobApplicationUncheckedUpdateManyWithoutUserNestedInput.schema';
import { EducationUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './EducationUncheckedUpdateManyWithoutUserNestedInput.schema';
import { SkillUncheckedUpdateManyWithoutUsersNestedInputObjectSchema } from './SkillUncheckedUpdateManyWithoutUsersNestedInput.schema';
import { LanguageUncheckedUpdateManyWithoutUsersNestedInputObjectSchema } from './LanguageUncheckedUpdateManyWithoutUsersNestedInput.schema';
import { AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUncheckedUpdateManyWithoutUserNestedInput.schema';
import { SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUncheckedUpdateManyWithoutUserNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  emailVerified: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  image: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  username: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  password: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  role: z.union([UserRoleSchema, z.lazy(() => EnumUserRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  summary: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  availability: z.union([UserAvailabilityTypeSchema, z.lazy(() => NullableEnumUserAvailabilityTypeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  preferredWorkTypes: z.union([z.lazy(() => UserUpdatepreferredWorkTypesInputObjectSchema), JobTypeSchema.array()]).optional(),
  preferredLocation: z.union([z.lazy(() => UserUpdatepreferredLocationInputObjectSchema), z.string().array()]).optional(),
  rightToWork: z.union([z.lazy(() => UserUpdaterightToWorkInputObjectSchema), z.string().array()]).optional(),
  expectedSalary: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  jobClassification: z.union([z.lazy(() => UserUpdatejobClassificationInputObjectSchema), JobClassSchema.array()]).optional(),
  approachability: z.union([UserApproachabilitySchema, z.lazy(() => NullableEnumUserApproachabilityFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  companies: z.lazy(() => CompanyMemberUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  resumes: z.lazy(() => ResumeUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  JobApplication: z.lazy(() => JobApplicationUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  education: z.lazy(() => EducationUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  skills: z.lazy(() => SkillUncheckedUpdateManyWithoutUsersNestedInputObjectSchema).optional(),
  languages: z.lazy(() => LanguageUncheckedUpdateManyWithoutUsersNestedInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUncheckedUpdateWithoutPreviousCareersInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutPreviousCareersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateWithoutPreviousCareersInput>;
export const UserUncheckedUpdateWithoutPreviousCareersInputObjectZodSchema = makeSchema();
