import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema'

const schema = z.object({
  AND: z.union([z.lazy(() => AnswerScalarWhereInputObjectSchema), z.lazy(() => AnswerScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AnswerScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AnswerScalarWhereInputObjectSchema), z.lazy(() => AnswerScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  text: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  jobApplicationId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  questionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const AnswerScalarWhereInputObjectSchema: z.ZodType<Prisma.AnswerScalarWhereInput> = schema as unknown as z.ZodType<Prisma.AnswerScalarWhereInput>;
export const AnswerScalarWhereInputObjectZodSchema = schema;
