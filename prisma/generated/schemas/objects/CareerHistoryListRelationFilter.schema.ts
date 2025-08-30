import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CareerHistoryWhereInputObjectSchema } from './CareerHistoryWhereInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  every: z.lazy(() => CareerHistoryWhereInputObjectSchema).optional(),
  some: z.lazy(() => CareerHistoryWhereInputObjectSchema).optional(),
  none: z.lazy(() => CareerHistoryWhereInputObjectSchema).optional()
}).strict();
export const CareerHistoryListRelationFilterObjectSchema: z.ZodType<Prisma.CareerHistoryListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CareerHistoryListRelationFilter>;
export const CareerHistoryListRelationFilterObjectZodSchema = makeSchema();
