import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  expires_at: SortOrderSchema.optional()
}).strict();
export const AccountSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountSumOrderByAggregateInput> = makeSchema();
export const AccountSumOrderByAggregateInputObjectZodSchema = makeSchema();
