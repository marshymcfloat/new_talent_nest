import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  text: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  questionId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const AnswerUncheckedUpdateWithoutJobApplicationInputObjectSchema: z.ZodType<Prisma.AnswerUncheckedUpdateWithoutJobApplicationInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerUncheckedUpdateWithoutJobApplicationInput>;
export const AnswerUncheckedUpdateWithoutJobApplicationInputObjectZodSchema = makeSchema();
