import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { QuestionTypeSchema } from '../enums/QuestionType.schema';
import { EnumQuestionTypeFieldUpdateOperationsInputObjectSchema } from './EnumQuestionTypeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { EmployerQuestionUpdateoptionsInputObjectSchema } from './EmployerQuestionUpdateoptionsInput.schema';
import { JobUpdateOneRequiredWithoutEmployerQuestionsNestedInputObjectSchema } from './JobUpdateOneRequiredWithoutEmployerQuestionsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  text: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([QuestionTypeSchema, z.lazy(() => EnumQuestionTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  isRequired: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  options: z.union([z.lazy(() => EmployerQuestionUpdateoptionsInputObjectSchema), z.string().array()]).optional(),
  Job: z.lazy(() => JobUpdateOneRequiredWithoutEmployerQuestionsNestedInputObjectSchema).optional()
}).strict();
export const EmployerQuestionUpdateWithoutAnswersInputObjectSchema: z.ZodType<Prisma.EmployerQuestionUpdateWithoutAnswersInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionUpdateWithoutAnswersInput>;
export const EmployerQuestionUpdateWithoutAnswersInputObjectZodSchema = makeSchema();
