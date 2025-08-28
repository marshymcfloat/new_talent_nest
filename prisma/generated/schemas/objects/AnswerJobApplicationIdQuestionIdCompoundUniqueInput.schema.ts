import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  jobApplicationId: z.string(),
  questionId: z.string()
}).strict();
export const AnswerJobApplicationIdQuestionIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.AnswerJobApplicationIdQuestionIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerJobApplicationIdQuestionIdCompoundUniqueInput>;
export const AnswerJobApplicationIdQuestionIdCompoundUniqueInputObjectZodSchema = makeSchema();
