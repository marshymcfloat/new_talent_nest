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
import { ResumeUpdateManyWithoutUserNestedInputObjectSchema } from './ResumeUpdateManyWithoutUserNestedInput.schema';
import { JobApplicationUpdateManyWithoutUserNestedInputObjectSchema } from './JobApplicationUpdateManyWithoutUserNestedInput.schema';
import { CareerHistoryUpdateManyWithoutUserNestedInputObjectSchema } from './CareerHistoryUpdateManyWithoutUserNestedInput.schema';
import { EducationUpdateManyWithoutUserNestedInputObjectSchema } from './EducationUpdateManyWithoutUserNestedInput.schema';
import { SkillUpdateManyWithoutUsersNestedInputObjectSchema } from './SkillUpdateManyWithoutUsersNestedInput.schema';
import { LanguageUpdateManyWithoutUsersNestedInputObjectSchema } from './LanguageUpdateManyWithoutUsersNestedInput.schema';
import { AccountUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUpdateManyWithoutUserNestedInput.schema';
import { SessionUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUpdateManyWithoutUserNestedInput.schema'

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
  preferredWorkType: z.union([JobTypeSchema, z.lazy(() => NullableEnumJobTypeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  preferredLocation: z.union([z.lazy(() => UserUpdatepreferredLocationInputObjectSchema), z.string().array()]).optional(),
  rightToWork: z.union([z.lazy(() => UserUpdaterightToWorkInputObjectSchema), z.string().array()]).optional(),
  expectedSalary: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  jobClassification: z.union([z.lazy(() => UserUpdatejobClassificationInputObjectSchema), JobClassSchema.array()]).optional(),
  resumes: z.lazy(() => ResumeUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  JobApplication: z.lazy(() => JobApplicationUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  previousCareers: z.lazy(() => CareerHistoryUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  education: z.lazy(() => EducationUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  skills: z.lazy(() => SkillUpdateManyWithoutUsersNestedInputObjectSchema).optional(),
  languages: z.lazy(() => LanguageUpdateManyWithoutUsersNestedInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutCompaniesInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutCompaniesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithoutCompaniesInput>;
export const UserUpdateWithoutCompaniesInputObjectZodSchema = makeSchema();
