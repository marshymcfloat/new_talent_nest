import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => QuestionsOnJobsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => QuestionsOnJobsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => QuestionsOnJobsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => QuestionsOnJobsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => QuestionsOnJobsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  jobId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  questionId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  isRequired: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  sortOrder: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const QuestionsOnJobsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsScalarWhereWithAggregatesInput> = schema as unknown as z.ZodType<Prisma.QuestionsOnJobsScalarWhereWithAggregatesInput>;
export const QuestionsOnJobsScalarWhereWithAggregatesInputObjectZodSchema = schema;
