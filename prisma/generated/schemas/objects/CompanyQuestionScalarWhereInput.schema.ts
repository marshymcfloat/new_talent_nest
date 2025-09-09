import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumQuestionTypeFilterObjectSchema } from './EnumQuestionTypeFilter.schema';
import { QuestionTypeSchema } from '../enums/QuestionType.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => CompanyQuestionScalarWhereInputObjectSchema), z.lazy(() => CompanyQuestionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CompanyQuestionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CompanyQuestionScalarWhereInputObjectSchema), z.lazy(() => CompanyQuestionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  text: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumQuestionTypeFilterObjectSchema), QuestionTypeSchema]).optional(),
  options: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  companyId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isArchived: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional()
}).strict();
export const CompanyQuestionScalarWhereInputObjectSchema: z.ZodType<Prisma.CompanyQuestionScalarWhereInput> = schema as unknown as z.ZodType<Prisma.CompanyQuestionScalarWhereInput>;
export const CompanyQuestionScalarWhereInputObjectZodSchema = schema;
