import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { AnswerUncheckedUpdateManyWithoutJobApplicationNestedInputObjectSchema } from './AnswerUncheckedUpdateManyWithoutJobApplicationNestedInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  jobId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  resumeId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  answers: z.lazy(() => AnswerUncheckedUpdateManyWithoutJobApplicationNestedInputObjectSchema).optional()
}).strict();
export const JobApplicationUncheckedUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.JobApplicationUncheckedUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUncheckedUpdateWithoutUserInput>;
export const JobApplicationUncheckedUpdateWithoutUserInputObjectZodSchema = makeSchema();
