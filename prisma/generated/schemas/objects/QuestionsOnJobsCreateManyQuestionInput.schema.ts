import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  jobId: z.string(),
  isRequired: z.boolean().optional(),
  sortOrder: z.number().int().optional().nullable()
}).strict();
export const QuestionsOnJobsCreateManyQuestionInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsCreateManyQuestionInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsCreateManyQuestionInput>;
export const QuestionsOnJobsCreateManyQuestionInputObjectZodSchema = makeSchema();
