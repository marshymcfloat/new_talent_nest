import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => AnswerScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AnswerScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AnswerScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AnswerScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AnswerScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  text: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  jobApplicationId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  questionId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const AnswerScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AnswerScalarWhereWithAggregatesInput> = schema as unknown as z.ZodType<Prisma.AnswerScalarWhereWithAggregatesInput>;
export const AnswerScalarWhereWithAggregatesInputObjectZodSchema = schema;
