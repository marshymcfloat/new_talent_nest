import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  AND: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  OR: z.lazy(makeSchema).array().optional(),
  NOT: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  text: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  jobApplicationId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  questionId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const AnswerScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AnswerScalarWhereWithAggregatesInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerScalarWhereWithAggregatesInput>;
export const AnswerScalarWhereWithAggregatesInputObjectZodSchema = makeSchema();
