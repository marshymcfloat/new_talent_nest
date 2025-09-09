import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  questionId: z.string(),
  isRequired: z.boolean().optional(),
  sortOrder: z.number().int().optional().nullable()
}).strict();
export const QuestionsOnJobsCreateManyJobInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsCreateManyJobInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsCreateManyJobInput>;
export const QuestionsOnJobsCreateManyJobInputObjectZodSchema = makeSchema();
