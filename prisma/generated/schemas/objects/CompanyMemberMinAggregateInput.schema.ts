import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  userId: z.literal(true).optional(),
  companyId: z.literal(true).optional(),
  role: z.literal(true).optional()
}).strict();
export const CompanyMemberMinAggregateInputObjectSchema: z.ZodType<Prisma.CompanyMemberMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberMinAggregateInputType>;
export const CompanyMemberMinAggregateInputObjectZodSchema = makeSchema();
