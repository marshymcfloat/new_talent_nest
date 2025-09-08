import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional()
}).strict();
export const LanguageMaxAggregateInputObjectSchema: z.ZodType<Prisma.LanguageMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LanguageMaxAggregateInputType>;
export const LanguageMaxAggregateInputObjectZodSchema = makeSchema();
