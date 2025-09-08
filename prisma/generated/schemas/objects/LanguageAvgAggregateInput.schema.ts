import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const LanguageAvgAggregateInputObjectSchema: z.ZodType<Prisma.LanguageAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LanguageAvgAggregateInputType>;
export const LanguageAvgAggregateInputObjectZodSchema = makeSchema();
