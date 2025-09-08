import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  finishedYear: z.literal(true).optional(),
  expectedFinishMonth: z.literal(true).optional(),
  expectedFinishYear: z.literal(true).optional()
}).strict();
export const EducationAvgAggregateInputObjectSchema: z.ZodType<Prisma.EducationAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EducationAvgAggregateInputType>;
export const EducationAvgAggregateInputObjectZodSchema = makeSchema();
