import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  sortOrder: z.literal(true).optional()
}).strict();
export const QuestionsOnJobsSumAggregateInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsSumAggregateInputType>;
export const QuestionsOnJobsSumAggregateInputObjectZodSchema = makeSchema();
