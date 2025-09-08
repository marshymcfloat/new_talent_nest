import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  text: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  questionId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const AnswerUncheckedUpdateManyWithoutJobApplicationInputObjectSchema: z.ZodType<Prisma.AnswerUncheckedUpdateManyWithoutJobApplicationInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerUncheckedUpdateManyWithoutJobApplicationInput>;
export const AnswerUncheckedUpdateManyWithoutJobApplicationInputObjectZodSchema = makeSchema();
