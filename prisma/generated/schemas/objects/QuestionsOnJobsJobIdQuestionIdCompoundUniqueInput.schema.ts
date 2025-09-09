import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  jobId: z.string(),
  questionId: z.string()
}).strict();
export const QuestionsOnJobsJobIdQuestionIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsJobIdQuestionIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsJobIdQuestionIdCompoundUniqueInput>;
export const QuestionsOnJobsJobIdQuestionIdCompoundUniqueInputObjectZodSchema = makeSchema();
