import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const SkillAvgAggregateInputObjectSchema: z.ZodType<Prisma.SkillAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SkillAvgAggregateInputType>;
export const SkillAvgAggregateInputObjectZodSchema = makeSchema();
