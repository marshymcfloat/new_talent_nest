import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  userId: z.literal(true).optional(),
  companyId: z.literal(true).optional(),
  role: z.literal(true).optional()
}).strict();
export const CompanyMemberMaxAggregateInputObjectSchema: z.ZodType<Prisma.CompanyMemberMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberMaxAggregateInputType>;
export const CompanyMemberMaxAggregateInputObjectZodSchema = makeSchema();
