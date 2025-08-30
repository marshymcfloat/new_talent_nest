import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  company: z.boolean().optional(),
  dateStarted: z.boolean().optional(),
  dateEnded: z.boolean().optional(),
  description: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const CareerHistorySelectObjectSchema: z.ZodType<Prisma.CareerHistorySelect> = makeSchema() as unknown as z.ZodType<Prisma.CareerHistorySelect>;
export const CareerHistorySelectObjectZodSchema = makeSchema();
