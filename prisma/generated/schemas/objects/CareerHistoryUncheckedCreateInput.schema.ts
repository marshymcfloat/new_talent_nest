import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  company: z.string(),
  dateStarted: z.coerce.date(),
  dateEnded: z.coerce.date().optional().nullable(),
  description: z.string().optional().nullable(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();
export const CareerHistoryUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CareerHistoryUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CareerHistoryUncheckedCreateInput>;
export const CareerHistoryUncheckedCreateInputObjectZodSchema = makeSchema();
