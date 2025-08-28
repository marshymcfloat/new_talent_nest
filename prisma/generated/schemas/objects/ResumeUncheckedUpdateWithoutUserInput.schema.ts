import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { JobApplicationUncheckedUpdateManyWithoutResumeNestedInputObjectSchema } from './JobApplicationUncheckedUpdateManyWithoutResumeNestedInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  Title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isPrimary: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  JobApplications: z.lazy(() => JobApplicationUncheckedUpdateManyWithoutResumeNestedInputObjectSchema).optional()
}).strict();
export const ResumeUncheckedUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.ResumeUncheckedUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeUncheckedUpdateWithoutUserInput>;
export const ResumeUncheckedUpdateWithoutUserInputObjectZodSchema = makeSchema();
