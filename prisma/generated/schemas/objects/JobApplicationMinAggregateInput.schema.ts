import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  jobId: z.literal(true).optional(),
  resumeId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const JobApplicationMinAggregateInputObjectSchema: z.ZodType<Prisma.JobApplicationMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationMinAggregateInputType>;
export const JobApplicationMinAggregateInputObjectZodSchema = makeSchema();
