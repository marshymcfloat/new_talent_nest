import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  questionId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isRequired: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  sortOrder: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const QuestionsOnJobsUncheckedUpdateWithoutJobInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsUncheckedUpdateWithoutJobInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsUncheckedUpdateWithoutJobInput>;
export const QuestionsOnJobsUncheckedUpdateWithoutJobInputObjectZodSchema = makeSchema();
