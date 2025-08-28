import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  text: z.string(),
  jobApplicationId: z.string()
}).strict();
export const AnswerUncheckedCreateWithoutQuestionInputObjectSchema: z.ZodType<Prisma.AnswerUncheckedCreateWithoutQuestionInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerUncheckedCreateWithoutQuestionInput>;
export const AnswerUncheckedCreateWithoutQuestionInputObjectZodSchema = makeSchema();
