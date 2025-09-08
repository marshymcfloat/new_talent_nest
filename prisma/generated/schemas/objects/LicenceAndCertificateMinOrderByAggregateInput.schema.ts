import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  organization: SortOrderSchema.optional(),
  dateIssed: SortOrderSchema.optional(),
  expiryDate: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const LicenceAndCertificateMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LicenceAndCertificateMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LicenceAndCertificateMinOrderByAggregateInput>;
export const LicenceAndCertificateMinOrderByAggregateInputObjectZodSchema = makeSchema();
