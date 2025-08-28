import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionTypeSchema } from '../enums/QuestionType.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  equals: QuestionTypeSchema.optional(),
  in: QuestionTypeSchema.array().optional(),
  notIn: QuestionTypeSchema.array().optional(),
  not: z.union([QuestionTypeSchema, z.lazy(makeSchema)]).optional()
}).strict();
export const NestedEnumQuestionTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumQuestionTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.NestedEnumQuestionTypeFilter>;
export const NestedEnumQuestionTypeFilterObjectZodSchema = makeSchema();
