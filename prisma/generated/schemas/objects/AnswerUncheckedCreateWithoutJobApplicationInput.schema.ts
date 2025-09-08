import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  text: z.string(),
  questionId: z.string()
}).strict();
export const AnswerUncheckedCreateWithoutJobApplicationInputObjectSchema: z.ZodType<Prisma.AnswerUncheckedCreateWithoutJobApplicationInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerUncheckedCreateWithoutJobApplicationInput>;
export const AnswerUncheckedCreateWithoutJobApplicationInputObjectZodSchema = makeSchema();
