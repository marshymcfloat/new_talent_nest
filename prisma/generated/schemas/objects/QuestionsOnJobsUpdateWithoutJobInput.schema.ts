import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { CompanyQuestionUpdateOneRequiredWithoutJobsNestedInputObjectSchema } from './CompanyQuestionUpdateOneRequiredWithoutJobsNestedInput.schema'

const makeSchema = () => z.object({
  isRequired: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  sortOrder: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  question: z.lazy(() => CompanyQuestionUpdateOneRequiredWithoutJobsNestedInputObjectSchema).optional()
}).strict();
export const QuestionsOnJobsUpdateWithoutJobInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsUpdateWithoutJobInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsUpdateWithoutJobInput>;
export const QuestionsOnJobsUpdateWithoutJobInputObjectZodSchema = makeSchema();
