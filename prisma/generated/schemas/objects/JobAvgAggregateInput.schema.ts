import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  minSalary: z.literal(true).optional(),
  maxSalary: z.literal(true).optional()
}).strict();
export const JobAvgAggregateInputObjectSchema: z.ZodType<Prisma.JobAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.JobAvgAggregateInputType>;
export const JobAvgAggregateInputObjectZodSchema = makeSchema();
