import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  company: z.string(),
  dateStarted: z.coerce.date(),
  dateEnded: z.coerce.date().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();
export const CareerHistoryCreateManyUserInputObjectSchema: z.ZodType<Prisma.CareerHistoryCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CareerHistoryCreateManyUserInput>;
export const CareerHistoryCreateManyUserInputObjectZodSchema = makeSchema();
