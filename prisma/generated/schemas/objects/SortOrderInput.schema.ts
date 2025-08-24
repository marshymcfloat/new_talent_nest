import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { NullsOrderSchema } from '../enums/NullsOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  sort: SortOrderSchema,
  nulls: NullsOrderSchema.optional()
}).strict();
export const SortOrderInputObjectSchema: z.ZodType<Prisma.SortOrderInput> = makeSchema();
export const SortOrderInputObjectZodSchema = makeSchema();
