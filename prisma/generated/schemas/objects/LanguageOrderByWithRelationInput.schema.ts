import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  users: z.lazy(() => UserOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const LanguageOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.LanguageOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageOrderByWithRelationInput>;
export const LanguageOrderByWithRelationInputObjectZodSchema = makeSchema();
