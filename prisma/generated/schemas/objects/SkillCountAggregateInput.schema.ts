import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const SkillCountAggregateInputObjectSchema: z.ZodType<Prisma.SkillCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SkillCountAggregateInputType>;
export const SkillCountAggregateInputObjectZodSchema = makeSchema();
