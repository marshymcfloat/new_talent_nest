import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumQuestionTypeWithAggregatesFilterObjectSchema } from './EnumQuestionTypeWithAggregatesFilter.schema';
import { QuestionTypeSchema } from '../enums/QuestionType.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => CompanyQuestionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CompanyQuestionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CompanyQuestionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CompanyQuestionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CompanyQuestionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  text: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumQuestionTypeWithAggregatesFilterObjectSchema), QuestionTypeSchema]).optional(),
  options: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  companyId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  isArchived: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const CompanyQuestionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CompanyQuestionScalarWhereWithAggregatesInput> = schema as unknown as z.ZodType<Prisma.CompanyQuestionScalarWhereWithAggregatesInput>;
export const CompanyQuestionScalarWhereWithAggregatesInputObjectZodSchema = schema;
