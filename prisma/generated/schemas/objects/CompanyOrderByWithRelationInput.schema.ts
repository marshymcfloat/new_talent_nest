import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { JobOrderByRelationAggregateInputObjectSchema } from './JobOrderByRelationAggregateInput.schema';
import { CompanyMemberOrderByRelationAggregateInputObjectSchema } from './CompanyMemberOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  websiteUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  logoUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  verifiedDomains: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  jobs: z.lazy(() => JobOrderByRelationAggregateInputObjectSchema).optional(),
  members: z.lazy(() => CompanyMemberOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const CompanyOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CompanyOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyOrderByWithRelationInput>;
export const CompanyOrderByWithRelationInputObjectZodSchema = makeSchema();
