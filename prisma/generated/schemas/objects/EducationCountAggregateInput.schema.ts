import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  course: z.literal(true).optional(),
  institution: z.literal(true).optional(),
  dateStarted: z.literal(true).optional(),
  dateEnded: z.literal(true).optional(),
  highlight: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const EducationCountAggregateInputObjectSchema: z.ZodType<Prisma.EducationCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EducationCountAggregateInputType>;
export const EducationCountAggregateInputObjectZodSchema = makeSchema();
