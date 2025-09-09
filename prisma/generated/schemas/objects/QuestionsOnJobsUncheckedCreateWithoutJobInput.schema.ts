import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  questionId: z.string(),
  isRequired: z.boolean().optional(),
  sortOrder: z.number().int().optional().nullable()
}).strict();
export const QuestionsOnJobsUncheckedCreateWithoutJobInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsUncheckedCreateWithoutJobInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsUncheckedCreateWithoutJobInput>;
export const QuestionsOnJobsUncheckedCreateWithoutJobInputObjectZodSchema = makeSchema();
