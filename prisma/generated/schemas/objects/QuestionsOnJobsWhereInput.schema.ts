import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { JobScalarRelationFilterObjectSchema } from './JobScalarRelationFilter.schema';
import { JobWhereInputObjectSchema } from './JobWhereInput.schema';
import { CompanyQuestionScalarRelationFilterObjectSchema } from './CompanyQuestionScalarRelationFilter.schema';
import { CompanyQuestionWhereInputObjectSchema } from './CompanyQuestionWhereInput.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => QuestionsOnJobsWhereInputObjectSchema), z.lazy(() => QuestionsOnJobsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => QuestionsOnJobsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => QuestionsOnJobsWhereInputObjectSchema), z.lazy(() => QuestionsOnJobsWhereInputObjectSchema).array()]).optional(),
  jobId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  questionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isRequired: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  sortOrder: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  job: z.union([z.lazy(() => JobScalarRelationFilterObjectSchema), z.lazy(() => JobWhereInputObjectSchema)]).optional(),
  question: z.union([z.lazy(() => CompanyQuestionScalarRelationFilterObjectSchema), z.lazy(() => CompanyQuestionWhereInputObjectSchema)]).optional()
}).strict();
export const QuestionsOnJobsWhereInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsWhereInput> = schema as unknown as z.ZodType<Prisma.QuestionsOnJobsWhereInput>;
export const QuestionsOnJobsWhereInputObjectZodSchema = schema;
