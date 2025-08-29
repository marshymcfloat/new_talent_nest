import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ResumeUpdateOneRequiredWithoutJobApplicationsNestedInputObjectSchema } from './ResumeUpdateOneRequiredWithoutJobApplicationsNestedInput.schema';
import { UserUpdateOneRequiredWithoutJobApplicationNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutJobApplicationNestedInput.schema';
import { AnswerUpdateManyWithoutJobApplicationNestedInputObjectSchema } from './AnswerUpdateManyWithoutJobApplicationNestedInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  resume: z.lazy(() => ResumeUpdateOneRequiredWithoutJobApplicationsNestedInputObjectSchema).optional(),
  User: z.lazy(() => UserUpdateOneRequiredWithoutJobApplicationNestedInputObjectSchema).optional(),
  answers: z.lazy(() => AnswerUpdateManyWithoutJobApplicationNestedInputObjectSchema).optional()
}).strict();
export const JobApplicationUpdateWithoutJobInputObjectSchema: z.ZodType<Prisma.JobApplicationUpdateWithoutJobInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUpdateWithoutJobInput>;
export const JobApplicationUpdateWithoutJobInputObjectZodSchema = makeSchema();
