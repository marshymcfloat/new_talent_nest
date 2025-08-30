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
  updatedAt: z.literal(true).optional()
}).strict();
export const CareerHistoryMaxAggregateInputObjectSchema: z.ZodType<Prisma.CareerHistoryMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CareerHistoryMaxAggregateInputType>;
export const CareerHistoryMaxAggregateInputObjectZodSchema = makeSchema();
