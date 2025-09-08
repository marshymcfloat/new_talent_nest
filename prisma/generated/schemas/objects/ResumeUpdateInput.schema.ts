import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutResumesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutResumesNestedInput.schema';
import { JobApplicationUpdateManyWithoutResumeNestedInputObjectSchema } from './JobApplicationUpdateManyWithoutResumeNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isPrimary: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  User: z.lazy(() => UserUpdateOneRequiredWithoutResumesNestedInputObjectSchema).optional(),
  JobApplications: z.lazy(() => JobApplicationUpdateManyWithoutResumeNestedInputObjectSchema).optional()
}).strict();
export const ResumeUpdateInputObjectSchema: z.ZodType<Prisma.ResumeUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeUpdateInput>;
export const ResumeUpdateInputObjectZodSchema = makeSchema();
