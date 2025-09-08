import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  course: z.literal(true).optional(),
  institution: z.literal(true).optional(),
  highlight: z.literal(true).optional(),
  isComplete: z.literal(true).optional(),
  finishedYear: z.literal(true).optional(),
  expectedFinishMonth: z.literal(true).optional(),
  expectedFinishYear: z.literal(true).optional(),
  deletedAt: z.literal(true).optional()
}).strict();
export const EducationMinAggregateInputObjectSchema: z.ZodType<Prisma.EducationMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EducationMinAggregateInputType>;
export const EducationMinAggregateInputObjectZodSchema = makeSchema();
