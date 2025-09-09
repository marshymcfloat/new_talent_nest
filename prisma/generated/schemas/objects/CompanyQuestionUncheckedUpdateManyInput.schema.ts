import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { QuestionTypeSchema } from '../enums/QuestionType.schema';
import { EnumQuestionTypeFieldUpdateOperationsInputObjectSchema } from './EnumQuestionTypeFieldUpdateOperationsInput.schema';
import { CompanyQuestionUpdateoptionsInputObjectSchema } from './CompanyQuestionUpdateoptionsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  text: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([QuestionTypeSchema, z.lazy(() => EnumQuestionTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  options: z.union([z.lazy(() => CompanyQuestionUpdateoptionsInputObjectSchema), z.string().array()]).optional(),
  companyId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isArchived: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CompanyQuestionUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.CompanyQuestionUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionUncheckedUpdateManyInput>;
export const CompanyQuestionUncheckedUpdateManyInputObjectZodSchema = makeSchema();
