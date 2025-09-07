import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ApplicationStatusSchema } from '../enums/ApplicationStatus.schema';
import { EnumApplicationStatusFieldUpdateOperationsInputObjectSchema } from './EnumApplicationStatusFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ResumeUpdateOneRequiredWithoutJobApplicationsNestedInputObjectSchema } from './ResumeUpdateOneRequiredWithoutJobApplicationsNestedInput.schema';
import { JobUpdateOneRequiredWithoutJobApplicationNestedInputObjectSchema } from './JobUpdateOneRequiredWithoutJobApplicationNestedInput.schema';
import { UserUpdateOneRequiredWithoutJobApplicationNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutJobApplicationNestedInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([ApplicationStatusSchema, z.lazy(() => EnumApplicationStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  isArchived: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  resume: z.lazy(() => ResumeUpdateOneRequiredWithoutJobApplicationsNestedInputObjectSchema).optional(),
  Job: z.lazy(() => JobUpdateOneRequiredWithoutJobApplicationNestedInputObjectSchema).optional(),
  User: z.lazy(() => UserUpdateOneRequiredWithoutJobApplicationNestedInputObjectSchema).optional()
}).strict();
export const JobApplicationUpdateWithoutAnswersInputObjectSchema: z.ZodType<Prisma.JobApplicationUpdateWithoutAnswersInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUpdateWithoutAnswersInput>;
export const JobApplicationUpdateWithoutAnswersInputObjectZodSchema = makeSchema();
