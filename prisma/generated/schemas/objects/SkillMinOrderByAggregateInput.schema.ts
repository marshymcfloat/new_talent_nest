import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional()
}).strict();
export const SkillMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SkillMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SkillMinOrderByAggregateInput>;
export const SkillMinOrderByAggregateInputObjectZodSchema = makeSchema();
