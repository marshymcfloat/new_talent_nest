import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  jobId: z.string(),
  isRequired: z.boolean().optional(),
  sortOrder: z.number().int().optional().nullable()
}).strict();
export const QuestionsOnJobsUncheckedCreateWithoutQuestionInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsUncheckedCreateWithoutQuestionInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsUncheckedCreateWithoutQuestionInput>;
export const QuestionsOnJobsUncheckedCreateWithoutQuestionInputObjectZodSchema = makeSchema();
