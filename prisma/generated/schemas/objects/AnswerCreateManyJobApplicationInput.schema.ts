import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  text: z.string(),
  questionId: z.string()
}).strict();
export const AnswerCreateManyJobApplicationInputObjectSchema: z.ZodType<Prisma.AnswerCreateManyJobApplicationInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerCreateManyJobApplicationInput>;
export const AnswerCreateManyJobApplicationInputObjectZodSchema = makeSchema();
