import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutJobApplicationNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutJobApplicationNestedInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  User: z.lazy(() => UserUpdateOneRequiredWithoutJobApplicationNestedInputObjectSchema).optional()
}).strict();
export const JobApplicationUpdateWithoutJobInputObjectSchema: z.ZodType<Prisma.JobApplicationUpdateWithoutJobInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUpdateWithoutJobInput>;
export const JobApplicationUpdateWithoutJobInputObjectZodSchema = makeSchema();
