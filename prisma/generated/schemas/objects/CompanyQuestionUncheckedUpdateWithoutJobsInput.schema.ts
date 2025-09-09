import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { QuestionTypeSchema } from '../enums/QuestionType.schema';
import { EnumQuestionTypeFieldUpdateOperationsInputObjectSchema } from './EnumQuestionTypeFieldUpdateOperationsInput.schema';
import { CompanyQuestionUpdateoptionsInputObjectSchema } from './CompanyQuestionUpdateoptionsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { AnswerUncheckedUpdateManyWithoutQuestionNestedInputObjectSchema } from './AnswerUncheckedUpdateManyWithoutQuestionNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  text: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([QuestionTypeSchema, z.lazy(() => EnumQuestionTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  options: z.union([z.lazy(() => CompanyQuestionUpdateoptionsInputObjectSchema), z.string().array()]).optional(),
  companyId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isArchived: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  answers: z.lazy(() => AnswerUncheckedUpdateManyWithoutQuestionNestedInputObjectSchema).optional()
}).strict();
export const CompanyQuestionUncheckedUpdateWithoutJobsInputObjectSchema: z.ZodType<Prisma.CompanyQuestionUncheckedUpdateWithoutJobsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionUncheckedUpdateWithoutJobsInput>;
export const CompanyQuestionUncheckedUpdateWithoutJobsInputObjectZodSchema = makeSchema();
