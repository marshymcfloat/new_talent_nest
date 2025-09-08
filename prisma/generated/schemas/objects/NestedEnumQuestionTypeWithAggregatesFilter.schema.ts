import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionTypeSchema } from '../enums/QuestionType.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumQuestionTypeFilterObjectSchema } from './NestedEnumQuestionTypeFilter.schema'

const schema = z.object({
  equals: QuestionTypeSchema.optional(),
  in: QuestionTypeSchema.array().optional(),
  notIn: QuestionTypeSchema.array().optional(),
  not: z.union([QuestionTypeSchema, z.lazy(() => NestedEnumQuestionTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumQuestionTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumQuestionTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumQuestionTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumQuestionTypeWithAggregatesFilter> = schema as unknown as z.ZodType<Prisma.NestedEnumQuestionTypeWithAggregatesFilter>;
export const NestedEnumQuestionTypeWithAggregatesFilterObjectZodSchema = schema;
