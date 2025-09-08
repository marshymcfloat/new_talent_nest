import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutPreviousCareersInputObjectSchema } from './UserCreateNestedOneWithoutPreviousCareersInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  company: z.string(),
  dateStarted: z.coerce.date(),
  dateEnded: z.coerce.date().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutPreviousCareersInputObjectSchema)
}).strict();
export const CareerHistoryCreateInputObjectSchema: z.ZodType<Prisma.CareerHistoryCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CareerHistoryCreateInput>;
export const CareerHistoryCreateInputObjectZodSchema = makeSchema();
