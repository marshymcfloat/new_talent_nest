import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.literal(true).optional(),
  text: z.literal(true).optional(),
  type: z.literal(true).optional(),
  isRequired: z.literal(true).optional(),
  options: z.literal(true).optional(),
  jobId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const EmployerQuestionCountAggregateInputObjectSchema: z.ZodType<Prisma.EmployerQuestionCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionCountAggregateInputType>;
export const EmployerQuestionCountAggregateInputObjectZodSchema = makeSchema();
