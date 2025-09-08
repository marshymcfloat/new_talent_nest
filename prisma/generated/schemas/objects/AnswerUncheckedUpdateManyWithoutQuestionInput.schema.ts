import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  text: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  jobApplicationId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const AnswerUncheckedUpdateManyWithoutQuestionInputObjectSchema: z.ZodType<Prisma.AnswerUncheckedUpdateManyWithoutQuestionInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerUncheckedUpdateManyWithoutQuestionInput>;
export const AnswerUncheckedUpdateManyWithoutQuestionInputObjectZodSchema = makeSchema();
