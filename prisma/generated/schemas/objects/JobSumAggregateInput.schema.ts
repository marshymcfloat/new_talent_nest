import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  minSalary: z.literal(true).optional(),
  maxSalary: z.literal(true).optional()
}).strict();
export const JobSumAggregateInputObjectSchema: z.ZodType<Prisma.JobSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.JobSumAggregateInputType>;
export const JobSumAggregateInputObjectZodSchema = makeSchema();
