import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  text: z.literal(true).optional(),
  type: z.literal(true).optional(),
  companyId: z.literal(true).optional(),
  isArchived: z.literal(true).optional()
}).strict();
export const CompanyQuestionMinAggregateInputObjectSchema: z.ZodType<Prisma.CompanyQuestionMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionMinAggregateInputType>;
export const CompanyQuestionMinAggregateInputObjectZodSchema = makeSchema();
