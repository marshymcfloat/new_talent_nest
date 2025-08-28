import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  text: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const AnswerUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.AnswerUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerUpdateManyMutationInput>;
export const AnswerUpdateManyMutationInputObjectZodSchema = makeSchema();
