import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  title: z.string(),
  company: z.string(),
  dateStarted: z.date(),
  dateEnded: z.date(),
  description: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
}).strict();
export const CareerHistoryCreateManyUserInputObjectSchema: z.ZodType<Prisma.CareerHistoryCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CareerHistoryCreateManyUserInput>;
export const CareerHistoryCreateManyUserInputObjectZodSchema = makeSchema();
