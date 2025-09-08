import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LanguageCountOrderByAggregateInputObjectSchema } from './LanguageCountOrderByAggregateInput.schema';
import { LanguageAvgOrderByAggregateInputObjectSchema } from './LanguageAvgOrderByAggregateInput.schema';
import { LanguageMaxOrderByAggregateInputObjectSchema } from './LanguageMaxOrderByAggregateInput.schema';
import { LanguageMinOrderByAggregateInputObjectSchema } from './LanguageMinOrderByAggregateInput.schema';
import { LanguageSumOrderByAggregateInputObjectSchema } from './LanguageSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  _count: z.lazy(() => LanguageCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => LanguageAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => LanguageMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => LanguageMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => LanguageSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const LanguageOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.LanguageOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageOrderByWithAggregationInput>;
export const LanguageOrderByWithAggregationInputObjectZodSchema = makeSchema();
