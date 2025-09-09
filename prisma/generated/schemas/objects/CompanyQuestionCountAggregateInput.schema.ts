import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  text: z.literal(true).optional(),
  type: z.literal(true).optional(),
  options: z.literal(true).optional(),
  companyId: z.literal(true).optional(),
  isArchived: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const CompanyQuestionCountAggregateInputObjectSchema: z.ZodType<Prisma.CompanyQuestionCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionCountAggregateInputType>;
export const CompanyQuestionCountAggregateInputObjectZodSchema = makeSchema();
