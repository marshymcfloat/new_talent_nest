import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumQuestionTypeFilterObjectSchema } from './EnumQuestionTypeFilter.schema';
import { QuestionTypeSchema } from '../enums/QuestionType.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => EmployerQuestionScalarWhereInputObjectSchema), z.lazy(() => EmployerQuestionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EmployerQuestionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EmployerQuestionScalarWhereInputObjectSchema), z.lazy(() => EmployerQuestionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  text: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumQuestionTypeFilterObjectSchema), QuestionTypeSchema]).optional(),
  isRequired: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  options: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  jobId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const EmployerQuestionScalarWhereInputObjectSchema: z.ZodType<Prisma.EmployerQuestionScalarWhereInput> = schema as unknown as z.ZodType<Prisma.EmployerQuestionScalarWhereInput>;
export const EmployerQuestionScalarWhereInputObjectZodSchema = schema;
