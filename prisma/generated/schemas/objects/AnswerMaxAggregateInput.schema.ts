import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.literal(true).optional(),
  text: z.literal(true).optional(),
  jobApplicationId: z.literal(true).optional(),
  questionId: z.literal(true).optional()
}).strict();
export const AnswerMaxAggregateInputObjectSchema: z.ZodType<Prisma.AnswerMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AnswerMaxAggregateInputType>;
export const AnswerMaxAggregateInputObjectZodSchema = makeSchema();
