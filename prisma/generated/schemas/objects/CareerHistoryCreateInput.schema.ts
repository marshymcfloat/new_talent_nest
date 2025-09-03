import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutPreviousCareersInputObjectSchema } from './UserCreateNestedOneWithoutPreviousCareersInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  title: z.string(),
  company: z.string(),
  dateStarted: z.date(),
  dateEnded: z.date().nullish(),
  description: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  deletedAt: z.date().nullish(),
  user: z.lazy(() => UserCreateNestedOneWithoutPreviousCareersInputObjectSchema)
}).strict();
export const CareerHistoryCreateInputObjectSchema: z.ZodType<Prisma.CareerHistoryCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CareerHistoryCreateInput>;
export const CareerHistoryCreateInputObjectZodSchema = makeSchema();
