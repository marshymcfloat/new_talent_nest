import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { JobUpdateOneRequiredWithoutJobApplicationNestedInputObjectSchema } from './JobUpdateOneRequiredWithoutJobApplicationNestedInput.schema';
import { UserUpdateOneRequiredWithoutJobApplicationNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutJobApplicationNestedInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  Job: z.lazy(() => JobUpdateOneRequiredWithoutJobApplicationNestedInputObjectSchema).optional(),
  User: z.lazy(() => UserUpdateOneRequiredWithoutJobApplicationNestedInputObjectSchema).optional()
}).strict();
export const JobApplicationUpdateInputObjectSchema: z.ZodType<Prisma.JobApplicationUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUpdateInput>;
export const JobApplicationUpdateInputObjectZodSchema = makeSchema();
