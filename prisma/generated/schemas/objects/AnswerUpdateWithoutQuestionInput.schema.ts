import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { JobApplicationUpdateOneRequiredWithoutAnswersNestedInputObjectSchema } from './JobApplicationUpdateOneRequiredWithoutAnswersNestedInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  text: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  JobApplication: z.lazy(() => JobApplicationUpdateOneRequiredWithoutAnswersNestedInputObjectSchema).optional()
}).strict();
export const AnswerUpdateWithoutQuestionInputObjectSchema: z.ZodType<Prisma.AnswerUpdateWithoutQuestionInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerUpdateWithoutQuestionInput>;
export const AnswerUpdateWithoutQuestionInputObjectZodSchema = makeSchema();
