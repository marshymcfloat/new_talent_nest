import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  websiteUrl: z.literal(true).optional(),
  logoUrl: z.literal(true).optional(),
  verifiedDomains: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const CompanyCountAggregateInputObjectSchema: z.ZodType<Prisma.CompanyCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CompanyCountAggregateInputType>;
export const CompanyCountAggregateInputObjectZodSchema = makeSchema();
