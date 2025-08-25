import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  jobId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const JobApplicationCountAggregateInputObjectSchema: z.ZodType<Prisma.JobApplicationCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationCountAggregateInputType>;
export const JobApplicationCountAggregateInputObjectZodSchema = makeSchema();
