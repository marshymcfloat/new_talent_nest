import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const JobApplicationUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.JobApplicationUpdateManyMutationInput> = makeSchema();
export const JobApplicationUpdateManyMutationInputObjectZodSchema = makeSchema();
