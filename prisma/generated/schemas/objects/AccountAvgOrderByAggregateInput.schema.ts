import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  expires_at: SortOrderSchema.optional()
}).strict();
export const AccountAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AccountAvgOrderByAggregateInput> = makeSchema();
export const AccountAvgOrderByAggregateInputObjectZodSchema = makeSchema();
