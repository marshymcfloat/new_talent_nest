import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { CompanyOrderByWithRelationInputObjectSchema } from './CompanyOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  userId: SortOrderSchema.optional(),
  companyId: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  company: z.lazy(() => CompanyOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const CompanyMemberOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CompanyMemberOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberOrderByWithRelationInput>;
export const CompanyMemberOrderByWithRelationInputObjectZodSchema = makeSchema();
