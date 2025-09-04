import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  userId: z.literal(true).optional(),
  companyId: z.literal(true).optional(),
  role: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const CompanyMemberCountAggregateInputObjectSchema: z.ZodType<Prisma.CompanyMemberCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberCountAggregateInputType>;
export const CompanyMemberCountAggregateInputObjectZodSchema = makeSchema();
