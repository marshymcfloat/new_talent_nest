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
export const QuestionsOnJobsUncheckedUpdateManyWithoutJobInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsUncheckedUpdateManyWithoutJobInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsUncheckedUpdateManyWithoutJobInput>;
export const QuestionsOnJobsUncheckedUpdateManyWithoutJobInputObjectZodSchema = makeSchema();
