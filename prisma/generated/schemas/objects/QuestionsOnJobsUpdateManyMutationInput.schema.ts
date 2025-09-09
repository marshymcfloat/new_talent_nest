import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  isRequired: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  sortOrder: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const QuestionsOnJobsUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsUpdateManyMutationInput>;
export const QuestionsOnJobsUpdateManyMutationInputObjectZodSchema = makeSchema();
