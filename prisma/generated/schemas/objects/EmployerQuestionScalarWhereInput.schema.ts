import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumQuestionTypeFilterObjectSchema } from './EnumQuestionTypeFilter.schema';
import { QuestionTypeSchema } from '../enums/QuestionType.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  AND: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  OR: z.lazy(makeSchema).array().optional(),
  NOT: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  text: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumQuestionTypeFilterObjectSchema), QuestionTypeSchema]).optional(),
  isRequired: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  options: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  jobId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const EmployerQuestionScalarWhereInputObjectSchema: z.ZodType<Prisma.EmployerQuestionScalarWhereInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionScalarWhereInput>;
export const EmployerQuestionScalarWhereInputObjectZodSchema = makeSchema();
