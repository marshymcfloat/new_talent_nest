import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumQuestionTypeFilterObjectSchema } from './EnumQuestionTypeFilter.schema';
import { QuestionTypeSchema } from '../enums/QuestionType.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { CompanyScalarRelationFilterObjectSchema } from './CompanyScalarRelationFilter.schema';
import { CompanyWhereInputObjectSchema } from './CompanyWhereInput.schema';
import { QuestionsOnJobsListRelationFilterObjectSchema } from './QuestionsOnJobsListRelationFilter.schema';
import { AnswerListRelationFilterObjectSchema } from './AnswerListRelationFilter.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => CompanyQuestionWhereInputObjectSchema), z.lazy(() => CompanyQuestionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CompanyQuestionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CompanyQuestionWhereInputObjectSchema), z.lazy(() => CompanyQuestionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  text: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumQuestionTypeFilterObjectSchema), QuestionTypeSchema]).optional(),
  options: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  companyId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isArchived: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  company: z.union([z.lazy(() => CompanyScalarRelationFilterObjectSchema), z.lazy(() => CompanyWhereInputObjectSchema)]).optional(),
  jobs: z.lazy(() => QuestionsOnJobsListRelationFilterObjectSchema).optional(),
  answers: z.lazy(() => AnswerListRelationFilterObjectSchema).optional()
}).strict();
export const CompanyQuestionWhereInputObjectSchema: z.ZodType<Prisma.CompanyQuestionWhereInput> = schema as unknown as z.ZodType<Prisma.CompanyQuestionWhereInput>;
export const CompanyQuestionWhereInputObjectZodSchema = schema;
