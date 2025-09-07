import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.literal(true).optional(),
  companyId: z.literal(true).optional(),
  title: z.literal(true).optional(),
  location: z.literal(true).optional(),
  type: z.literal(true).optional(),
  salary: z.literal(true).optional(),
  jobClass: z.literal(true).optional(),
  status: z.literal(true).optional(),
  summary: z.literal(true).optional(),
  qualifications: z.literal(true).optional(),
  responsibilities: z.literal(true).optional(),
  benefits: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const JobMinAggregateInputObjectSchema: z.ZodType<Prisma.JobMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.JobMinAggregateInputType>;
export const JobMinAggregateInputObjectZodSchema = makeSchema();
