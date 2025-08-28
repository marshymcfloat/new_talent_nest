import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.literal(true).optional(),
  text: z.literal(true).optional(),
  jobApplicationId: z.literal(true).optional(),
  questionId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const AnswerCountAggregateInputObjectSchema: z.ZodType<Prisma.AnswerCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AnswerCountAggregateInputType>;
export const AnswerCountAggregateInputObjectZodSchema = makeSchema();
