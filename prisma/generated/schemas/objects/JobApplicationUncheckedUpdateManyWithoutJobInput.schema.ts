import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const JobApplicationUncheckedUpdateManyWithoutJobInputObjectSchema: z.ZodType<Prisma.JobApplicationUncheckedUpdateManyWithoutJobInput> = makeSchema();
export const JobApplicationUncheckedUpdateManyWithoutJobInputObjectZodSchema = makeSchema();
