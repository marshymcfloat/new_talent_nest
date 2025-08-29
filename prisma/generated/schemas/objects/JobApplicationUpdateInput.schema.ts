import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ResumeUpdateOneRequiredWithoutJobApplicationsNestedInputObjectSchema } from './ResumeUpdateOneRequiredWithoutJobApplicationsNestedInput.schema';
import { JobUpdateOneRequiredWithoutJobApplicationNestedInputObjectSchema } from './JobUpdateOneRequiredWithoutJobApplicationNestedInput.schema';
import { UserUpdateOneRequiredWithoutJobApplicationNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutJobApplicationNestedInput.schema';
import { AnswerUpdateManyWithoutJobApplicationNestedInputObjectSchema } from './AnswerUpdateManyWithoutJobApplicationNestedInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  resume: z.lazy(() => ResumeUpdateOneRequiredWithoutJobApplicationsNestedInputObjectSchema).optional(),
  Job: z.lazy(() => JobUpdateOneRequiredWithoutJobApplicationNestedInputObjectSchema).optional(),
  User: z.lazy(() => UserUpdateOneRequiredWithoutJobApplicationNestedInputObjectSchema).optional(),
  answers: z.lazy(() => AnswerUpdateManyWithoutJobApplicationNestedInputObjectSchema).optional()
}).strict();
export const JobApplicationUpdateInputObjectSchema: z.ZodType<Prisma.JobApplicationUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUpdateInput>;
export const JobApplicationUpdateInputObjectZodSchema = makeSchema();
