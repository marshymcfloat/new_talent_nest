import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  course: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  institution: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  highlight: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  isComplete: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  finishedYear: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).nullish(),
  expectedFinishMonth: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).nullish(),
  expectedFinishYear: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).nullish()
}).strict();
export const EducationUncheckedUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.EducationUncheckedUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.EducationUncheckedUpdateWithoutUserInput>;
export const EducationUncheckedUpdateWithoutUserInputObjectZodSchema = makeSchema();
