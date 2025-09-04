import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  websiteUrl: z.literal(true).optional(),
  logoUrl: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const CompanyMaxAggregateInputObjectSchema: z.ZodType<Prisma.CompanyMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMaxAggregateInputType>;
export const CompanyMaxAggregateInputObjectZodSchema = makeSchema();
