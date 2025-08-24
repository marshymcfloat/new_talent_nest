import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  jobId: z.literal(true).optional()
}).strict();
export const JobApplicationMinAggregateInputObjectSchema: z.ZodType<Prisma.JobApplicationMinAggregateInputType> = makeSchema();
export const JobApplicationMinAggregateInputObjectZodSchema = makeSchema();
