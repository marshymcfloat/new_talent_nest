import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionTypeSchema } from '../enums/QuestionType.schema';
import { CompanyQuestionCreateoptionsInputObjectSchema } from './CompanyQuestionCreateoptionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  text: z.string(),
  type: QuestionTypeSchema,
  options: z.union([z.lazy(() => CompanyQuestionCreateoptionsInputObjectSchema), z.string().array()]).optional(),
  companyId: z.string(),
  isArchived: z.boolean().optional()
}).strict();
export const CompanyQuestionCreateManyInputObjectSchema: z.ZodType<Prisma.CompanyQuestionCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionCreateManyInput>;
export const CompanyQuestionCreateManyInputObjectZodSchema = makeSchema();
