import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  title: z.string(),
  company: z.string(),
  dateStarted: z.date(),
  dateEnded: z.date().nullish(),
  description: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  deletedAt: z.date().nullish()
}).strict();
export const CareerHistoryCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.CareerHistoryCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CareerHistoryCreateWithoutUserInput>;
export const CareerHistoryCreateWithoutUserInputObjectZodSchema = makeSchema();
