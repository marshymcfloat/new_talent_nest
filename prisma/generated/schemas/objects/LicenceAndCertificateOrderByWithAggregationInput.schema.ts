import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { LicenceAndCertificateCountOrderByAggregateInputObjectSchema } from './LicenceAndCertificateCountOrderByAggregateInput.schema';
import { LicenceAndCertificateMaxOrderByAggregateInputObjectSchema } from './LicenceAndCertificateMaxOrderByAggregateInput.schema';
import { LicenceAndCertificateMinOrderByAggregateInputObjectSchema } from './LicenceAndCertificateMinOrderByAggregateInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  organization: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dateIssed: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  expiryDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => LicenceAndCertificateCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => LicenceAndCertificateMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => LicenceAndCertificateMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const LicenceAndCertificateOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.LicenceAndCertificateOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.LicenceAndCertificateOrderByWithAggregationInput>;
export const LicenceAndCertificateOrderByWithAggregationInputObjectZodSchema = makeSchema();
