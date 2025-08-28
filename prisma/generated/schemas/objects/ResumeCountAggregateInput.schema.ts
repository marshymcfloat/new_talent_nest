import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.literal(true).optional(),
  Title: z.literal(true).optional(),
  url: z.literal(true).optional(),
  isPrimary: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ResumeCountAggregateInputObjectSchema: z.ZodType<Prisma.ResumeCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ResumeCountAggregateInputType>;
export const ResumeCountAggregateInputObjectZodSchema = makeSchema();
