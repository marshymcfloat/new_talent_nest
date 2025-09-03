import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  company: z.literal(true).optional(),
  dateStarted: z.literal(true).optional(),
  dateEnded: z.literal(true).optional(),
  description: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  deletedAt: z.literal(true).optional()
}).strict();
export const CareerHistoryMinAggregateInputObjectSchema: z.ZodType<Prisma.CareerHistoryMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CareerHistoryMinAggregateInputType>;
export const CareerHistoryMinAggregateInputObjectZodSchema = makeSchema();
