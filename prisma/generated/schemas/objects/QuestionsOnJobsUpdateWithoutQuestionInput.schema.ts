import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { JobUpdateOneRequiredWithoutQuestionsNestedInputObjectSchema } from './JobUpdateOneRequiredWithoutQuestionsNestedInput.schema'

const makeSchema = () => z.object({
  isRequired: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  sortOrder: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  job: z.lazy(() => JobUpdateOneRequiredWithoutQuestionsNestedInputObjectSchema).optional()
}).strict();
export const QuestionsOnJobsUpdateWithoutQuestionInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsUpdateWithoutQuestionInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsUpdateWithoutQuestionInput>;
export const QuestionsOnJobsUpdateWithoutQuestionInputObjectZodSchema = makeSchema();
