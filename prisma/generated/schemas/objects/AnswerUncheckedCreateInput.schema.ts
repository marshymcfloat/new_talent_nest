import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  text: z.string(),
  jobApplicationId: z.string(),
  questionId: z.string()
}).strict();
export const AnswerUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AnswerUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerUncheckedCreateInput>;
export const AnswerUncheckedCreateInputObjectZodSchema = makeSchema();
