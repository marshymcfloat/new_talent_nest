import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  text: z.literal(true).optional(),
  type: z.literal(true).optional(),
  isRequired: z.literal(true).optional(),
  jobId: z.literal(true).optional()
}).strict();
export const EmployerQuestionMaxAggregateInputObjectSchema: z.ZodType<Prisma.EmployerQuestionMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionMaxAggregateInputType>;
export const EmployerQuestionMaxAggregateInputObjectZodSchema = makeSchema();
