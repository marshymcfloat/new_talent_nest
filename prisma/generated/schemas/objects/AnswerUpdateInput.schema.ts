import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { JobApplicationUpdateOneRequiredWithoutAnswersNestedInputObjectSchema } from './JobApplicationUpdateOneRequiredWithoutAnswersNestedInput.schema';
import { CompanyQuestionUpdateOneRequiredWithoutAnswersNestedInputObjectSchema } from './CompanyQuestionUpdateOneRequiredWithoutAnswersNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  text: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  JobApplication: z.lazy(() => JobApplicationUpdateOneRequiredWithoutAnswersNestedInputObjectSchema).optional(),
  Question: z.lazy(() => CompanyQuestionUpdateOneRequiredWithoutAnswersNestedInputObjectSchema).optional()
}).strict();
export const AnswerUpdateInputObjectSchema: z.ZodType<Prisma.AnswerUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerUpdateInput>;
export const AnswerUpdateInputObjectZodSchema = makeSchema();
