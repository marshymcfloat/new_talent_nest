import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  jobId: z.string(),
  questionId: z.string(),
  isRequired: z.boolean().optional(),
  sortOrder: z.number().int().optional().nullable()
}).strict();
export const QuestionsOnJobsCreateManyInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsCreateManyInput>;
export const QuestionsOnJobsCreateManyInputObjectZodSchema = makeSchema();
