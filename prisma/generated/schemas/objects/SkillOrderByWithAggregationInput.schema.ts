import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SkillCountOrderByAggregateInputObjectSchema } from './SkillCountOrderByAggregateInput.schema';
import { SkillAvgOrderByAggregateInputObjectSchema } from './SkillAvgOrderByAggregateInput.schema';
import { SkillMaxOrderByAggregateInputObjectSchema } from './SkillMaxOrderByAggregateInput.schema';
import { SkillMinOrderByAggregateInputObjectSchema } from './SkillMinOrderByAggregateInput.schema';
import { SkillSumOrderByAggregateInputObjectSchema } from './SkillSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  _count: z.lazy(() => SkillCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => SkillAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SkillMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SkillMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => SkillSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SkillOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SkillOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SkillOrderByWithAggregationInput>;
export const SkillOrderByWithAggregationInputObjectZodSchema = makeSchema();
