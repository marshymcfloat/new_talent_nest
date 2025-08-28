import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  AND: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  OR: z.lazy(makeSchema).array().optional(),
  NOT: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  text: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  jobApplicationId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  questionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const AnswerScalarWhereInputObjectSchema: z.ZodType<Prisma.AnswerScalarWhereInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerScalarWhereInput>;
export const AnswerScalarWhereInputObjectZodSchema = makeSchema();
