import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumQuestionTypeWithAggregatesFilterObjectSchema } from './EnumQuestionTypeWithAggregatesFilter.schema';
import { QuestionTypeSchema } from '../enums/QuestionType.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  AND: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  OR: z.lazy(makeSchema).array().optional(),
  NOT: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  text: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumQuestionTypeWithAggregatesFilterObjectSchema), QuestionTypeSchema]).optional(),
  isRequired: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  options: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  jobId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const EmployerQuestionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.EmployerQuestionScalarWhereWithAggregatesInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionScalarWhereWithAggregatesInput>;
export const EmployerQuestionScalarWhereWithAggregatesInputObjectZodSchema = makeSchema();
