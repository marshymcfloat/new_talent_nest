import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnswerJobApplicationIdQuestionIdCompoundUniqueInputObjectSchema } from './AnswerJobApplicationIdQuestionIdCompoundUniqueInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string(),
  jobApplicationId_questionId: z.lazy(() => AnswerJobApplicationIdQuestionIdCompoundUniqueInputObjectSchema)
}).strict();
export const AnswerWhereUniqueInputObjectSchema: z.ZodType<Prisma.AnswerWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerWhereUniqueInput>;
export const AnswerWhereUniqueInputObjectZodSchema = makeSchema();
