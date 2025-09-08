import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const LanguageSumAggregateInputObjectSchema: z.ZodType<Prisma.LanguageSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LanguageSumAggregateInputType>;
export const LanguageSumAggregateInputObjectZodSchema = makeSchema();
