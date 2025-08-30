import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  company: SortOrderSchema.optional(),
  dateStarted: SortOrderSchema.optional(),
  dateEnded: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const CareerHistoryOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.CareerHistoryOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.CareerHistoryOrderByWithRelationInput>;
export const CareerHistoryOrderByWithRelationInputObjectZodSchema = makeSchema();
