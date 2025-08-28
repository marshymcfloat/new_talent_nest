import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  text: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  jobApplicationId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const AnswerUncheckedUpdateWithoutQuestionInputObjectSchema: z.ZodType<Prisma.AnswerUncheckedUpdateWithoutQuestionInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerUncheckedUpdateWithoutQuestionInput>;
export const AnswerUncheckedUpdateWithoutQuestionInputObjectZodSchema = makeSchema();
