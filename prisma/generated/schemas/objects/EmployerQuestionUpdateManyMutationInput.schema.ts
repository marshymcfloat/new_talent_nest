import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { QuestionTypeSchema } from '../enums/QuestionType.schema';
import { EnumQuestionTypeFieldUpdateOperationsInputObjectSchema } from './EnumQuestionTypeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { EmployerQuestionUpdateoptionsInputObjectSchema } from './EmployerQuestionUpdateoptionsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  text: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([QuestionTypeSchema, z.lazy(() => EnumQuestionTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  isRequired: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  options: z.union([z.lazy(() => EmployerQuestionUpdateoptionsInputObjectSchema), z.string().array()]).optional()
}).strict();
export const EmployerQuestionUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.EmployerQuestionUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionUpdateManyMutationInput>;
export const EmployerQuestionUpdateManyMutationInputObjectZodSchema = makeSchema();
