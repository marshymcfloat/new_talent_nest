import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => QuestionsOnJobsScalarWhereInputObjectSchema), z.lazy(() => QuestionsOnJobsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => QuestionsOnJobsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => QuestionsOnJobsScalarWhereInputObjectSchema), z.lazy(() => QuestionsOnJobsScalarWhereInputObjectSchema).array()]).optional(),
  jobId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  questionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isRequired: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  sortOrder: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const QuestionsOnJobsScalarWhereInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsScalarWhereInput> = schema as unknown as z.ZodType<Prisma.QuestionsOnJobsScalarWhereInput>;
export const QuestionsOnJobsScalarWhereInputObjectZodSchema = schema;
