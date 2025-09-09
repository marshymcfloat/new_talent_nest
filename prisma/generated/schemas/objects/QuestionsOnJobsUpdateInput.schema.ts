import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { JobUpdateOneRequiredWithoutQuestionsNestedInputObjectSchema } from './JobUpdateOneRequiredWithoutQuestionsNestedInput.schema';
import { CompanyQuestionUpdateOneRequiredWithoutJobsNestedInputObjectSchema } from './CompanyQuestionUpdateOneRequiredWithoutJobsNestedInput.schema'

const makeSchema = () => z.object({
  isRequired: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  sortOrder: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  job: z.lazy(() => JobUpdateOneRequiredWithoutQuestionsNestedInputObjectSchema).optional(),
  question: z.lazy(() => CompanyQuestionUpdateOneRequiredWithoutJobsNestedInputObjectSchema).optional()
}).strict();
export const QuestionsOnJobsUpdateInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsUpdateInput>;
export const QuestionsOnJobsUpdateInputObjectZodSchema = makeSchema();
