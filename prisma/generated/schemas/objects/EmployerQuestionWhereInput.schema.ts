import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumQuestionTypeFilterObjectSchema } from './EnumQuestionTypeFilter.schema';
import { QuestionTypeSchema } from '../enums/QuestionType.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { JobScalarRelationFilterObjectSchema } from './JobScalarRelationFilter.schema';
import { JobWhereInputObjectSchema } from './JobWhereInput.schema';
import { AnswerListRelationFilterObjectSchema } from './AnswerListRelationFilter.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => EmployerQuestionWhereInputObjectSchema), z.lazy(() => EmployerQuestionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EmployerQuestionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EmployerQuestionWhereInputObjectSchema), z.lazy(() => EmployerQuestionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  text: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => EnumQuestionTypeFilterObjectSchema), QuestionTypeSchema]).optional(),
  isRequired: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  options: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  jobId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  Job: z.union([z.lazy(() => JobScalarRelationFilterObjectSchema), z.lazy(() => JobWhereInputObjectSchema)]).optional(),
  answers: z.lazy(() => AnswerListRelationFilterObjectSchema).optional()
}).strict();
export const EmployerQuestionWhereInputObjectSchema: z.ZodType<Prisma.EmployerQuestionWhereInput> = schema as unknown as z.ZodType<Prisma.EmployerQuestionWhereInput>;
export const EmployerQuestionWhereInputObjectZodSchema = schema;
