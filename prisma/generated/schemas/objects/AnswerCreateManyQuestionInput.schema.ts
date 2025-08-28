import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  text: z.string(),
  jobApplicationId: z.string()
}).strict();
export const AnswerCreateManyQuestionInputObjectSchema: z.ZodType<Prisma.AnswerCreateManyQuestionInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerCreateManyQuestionInput>;
export const AnswerCreateManyQuestionInputObjectZodSchema = makeSchema();
