import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { JobUpdateOneRequiredWithoutJobApplicationNestedInputObjectSchema } from './JobUpdateOneRequiredWithoutJobApplicationNestedInput.schema';
import { UserUpdateOneRequiredWithoutJobApplicationNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutJobApplicationNestedInput.schema';
import { AnswerUpdateManyWithoutJobApplicationNestedInputObjectSchema } from './AnswerUpdateManyWithoutJobApplicationNestedInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  Job: z.lazy(() => JobUpdateOneRequiredWithoutJobApplicationNestedInputObjectSchema).optional(),
  User: z.lazy(() => UserUpdateOneRequiredWithoutJobApplicationNestedInputObjectSchema).optional(),
  answers: z.lazy(() => AnswerUpdateManyWithoutJobApplicationNestedInputObjectSchema).optional()
}).strict();
export const JobApplicationUpdateWithoutResumeInputObjectSchema: z.ZodType<Prisma.JobApplicationUpdateWithoutResumeInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUpdateWithoutResumeInput>;
export const JobApplicationUpdateWithoutResumeInputObjectZodSchema = makeSchema();
