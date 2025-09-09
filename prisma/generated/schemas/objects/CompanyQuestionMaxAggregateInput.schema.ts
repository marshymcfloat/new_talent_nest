import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  text: z.literal(true).optional(),
  type: z.literal(true).optional(),
  companyId: z.literal(true).optional(),
  isArchived: z.literal(true).optional()
}).strict();
export const CompanyQuestionMaxAggregateInputObjectSchema: z.ZodType<Prisma.CompanyQuestionMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionMaxAggregateInputType>;
export const CompanyQuestionMaxAggregateInputObjectZodSchema = makeSchema();
