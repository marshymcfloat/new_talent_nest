import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionsOnJobsWhereInputObjectSchema } from './QuestionsOnJobsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => QuestionsOnJobsWhereInputObjectSchema).optional(),
  some: z.lazy(() => QuestionsOnJobsWhereInputObjectSchema).optional(),
  none: z.lazy(() => QuestionsOnJobsWhereInputObjectSchema).optional()
}).strict();
export const QuestionsOnJobsListRelationFilterObjectSchema: z.ZodType<Prisma.QuestionsOnJobsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsListRelationFilter>;
export const QuestionsOnJobsListRelationFilterObjectZodSchema = makeSchema();
