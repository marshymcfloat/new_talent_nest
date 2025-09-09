import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  jobId: z.string(),
  questionId: z.string(),
  isRequired: z.boolean().optional(),
  sortOrder: z.number().int().optional().nullable()
}).strict();
export const QuestionsOnJobsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsUncheckedCreateInput>;
export const QuestionsOnJobsUncheckedCreateInputObjectZodSchema = makeSchema();
