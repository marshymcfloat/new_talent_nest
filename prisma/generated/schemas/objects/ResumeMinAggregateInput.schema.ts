import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  url: z.literal(true).optional(),
  isPrimary: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ResumeMinAggregateInputObjectSchema: z.ZodType<Prisma.ResumeMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ResumeMinAggregateInputType>;
export const ResumeMinAggregateInputObjectZodSchema = makeSchema();
