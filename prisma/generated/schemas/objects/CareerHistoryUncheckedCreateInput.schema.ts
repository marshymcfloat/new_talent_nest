import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  title: z.string(),
  company: z.string(),
  dateStarted: z.date(),
  dateEnded: z.date().nullish(),
  description: z.string().nullish(),
  userId: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
}).strict();
export const CareerHistoryUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CareerHistoryUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CareerHistoryUncheckedCreateInput>;
export const CareerHistoryUncheckedCreateInputObjectZodSchema = makeSchema();
