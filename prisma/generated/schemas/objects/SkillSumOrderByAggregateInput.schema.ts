import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const SkillSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SkillSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SkillSumOrderByAggregateInput>;
export const SkillSumOrderByAggregateInputObjectZodSchema = makeSchema();
