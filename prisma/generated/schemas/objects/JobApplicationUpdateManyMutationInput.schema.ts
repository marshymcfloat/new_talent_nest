import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ApplicationStatusSchema } from '../enums/ApplicationStatus.schema';
import { EnumApplicationStatusFieldUpdateOperationsInputObjectSchema } from './EnumApplicationStatusFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([ApplicationStatusSchema, z.lazy(() => EnumApplicationStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  isArchived: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const JobApplicationUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.JobApplicationUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUpdateManyMutationInput>;
export const JobApplicationUpdateManyMutationInputObjectZodSchema = makeSchema();
