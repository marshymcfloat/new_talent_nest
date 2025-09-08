import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  organization: z.literal(true).optional(),
  dateIssed: z.literal(true).optional(),
  expiryDate: z.literal(true).optional(),
  description: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const LicenceAndCertificateCountAggregateInputObjectSchema: z.ZodType<Prisma.LicenceAndCertificateCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LicenceAndCertificateCountAggregateInputType>;
export const LicenceAndCertificateCountAggregateInputObjectZodSchema = makeSchema();
