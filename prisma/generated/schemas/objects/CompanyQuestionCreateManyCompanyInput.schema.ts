import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionTypeSchema } from '../enums/QuestionType.schema';
import { CompanyQuestionCreateoptionsInputObjectSchema } from './CompanyQuestionCreateoptionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  text: z.string(),
  type: QuestionTypeSchema,
  options: z.union([z.lazy(() => CompanyQuestionCreateoptionsInputObjectSchema), z.string().array()]).optional(),
  isArchived: z.boolean().optional()
}).strict();
export const CompanyQuestionCreateManyCompanyInputObjectSchema: z.ZodType<Prisma.CompanyQuestionCreateManyCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionCreateManyCompanyInput>;
export const CompanyQuestionCreateManyCompanyInputObjectZodSchema = makeSchema();
