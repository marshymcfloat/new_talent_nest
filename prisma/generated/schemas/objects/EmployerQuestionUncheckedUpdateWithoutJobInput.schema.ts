import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { QuestionTypeSchema } from '../enums/QuestionType.schema';
import { EnumQuestionTypeFieldUpdateOperationsInputObjectSchema } from './EnumQuestionTypeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { EmployerQuestionUpdateoptionsInputObjectSchema } from './EmployerQuestionUpdateoptionsInput.schema';
import { AnswerUncheckedUpdateManyWithoutQuestionNestedInputObjectSchema } from './AnswerUncheckedUpdateManyWithoutQuestionNestedInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  text: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([QuestionTypeSchema, z.lazy(() => EnumQuestionTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  isRequired: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  options: z.union([z.lazy(() => EmployerQuestionUpdateoptionsInputObjectSchema), z.string().array()]).optional(),
  answers: z.lazy(() => AnswerUncheckedUpdateManyWithoutQuestionNestedInputObjectSchema).optional()
}).strict();
export const EmployerQuestionUncheckedUpdateWithoutJobInputObjectSchema: z.ZodType<Prisma.EmployerQuestionUncheckedUpdateWithoutJobInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionUncheckedUpdateWithoutJobInput>;
export const EmployerQuestionUncheckedUpdateWithoutJobInputObjectZodSchema = makeSchema();
