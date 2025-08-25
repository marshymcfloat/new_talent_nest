import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { JobUpdateOneRequiredWithoutJobApplicationNestedInputObjectSchema } from './JobUpdateOneRequiredWithoutJobApplicationNestedInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  Job: z.lazy(() => JobUpdateOneRequiredWithoutJobApplicationNestedInputObjectSchema).optional()
}).strict();
export const JobApplicationUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.JobApplicationUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUpdateWithoutUserInput>;
export const JobApplicationUpdateWithoutUserInputObjectZodSchema = makeSchema();
