import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const SkillSumAggregateInputObjectSchema: z.ZodType<Prisma.SkillSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SkillSumAggregateInputType>;
export const SkillSumAggregateInputObjectZodSchema = makeSchema();
