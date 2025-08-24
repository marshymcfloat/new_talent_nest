import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.literal(true).optional(),
  company: z.literal(true).optional(),
  title: z.literal(true).optional(),
  location: z.literal(true).optional(),
  type: z.literal(true).optional(),
  salary: z.literal(true).optional(),
  JobClass: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const JobCountAggregateInputObjectSchema: z.ZodType<Prisma.JobCountAggregateInputType> = makeSchema();
export const JobCountAggregateInputObjectZodSchema = makeSchema();
