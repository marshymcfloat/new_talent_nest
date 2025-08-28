import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  jobId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  resumeId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const JobApplicationUncheckedUpdateManyWithoutUserInputObjectSchema: z.ZodType<Prisma.JobApplicationUncheckedUpdateManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUncheckedUpdateManyWithoutUserInput>;
export const JobApplicationUncheckedUpdateManyWithoutUserInputObjectZodSchema = makeSchema();
