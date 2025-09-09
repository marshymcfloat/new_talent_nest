import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { CompanyQuestionUpdateOneRequiredWithoutAnswersNestedInputObjectSchema } from './CompanyQuestionUpdateOneRequiredWithoutAnswersNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  text: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  Question: z.lazy(() => CompanyQuestionUpdateOneRequiredWithoutAnswersNestedInputObjectSchema).optional()
}).strict();
export const AnswerUpdateWithoutJobApplicationInputObjectSchema: z.ZodType<Prisma.AnswerUpdateWithoutJobApplicationInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerUpdateWithoutJobApplicationInput>;
export const AnswerUpdateWithoutJobApplicationInputObjectZodSchema = makeSchema();
