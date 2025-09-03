import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EducationCountOrderByAggregateInputObjectSchema } from './EducationCountOrderByAggregateInput.schema';
import { EducationAvgOrderByAggregateInputObjectSchema } from './EducationAvgOrderByAggregateInput.schema';
import { EducationMaxOrderByAggregateInputObjectSchema } from './EducationMaxOrderByAggregateInput.schema';
import { EducationMinOrderByAggregateInputObjectSchema } from './EducationMinOrderByAggregateInput.schema';
import { EducationSumOrderByAggregateInputObjectSchema } from './EducationSumOrderByAggregateInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  course: SortOrderSchema.optional(),
  institution: SortOrderSchema.optional(),
  highlight: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isComplete: SortOrderSchema.optional(),
  finishedYear: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  expectedFinishMonth: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  expectedFinishYear: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => EducationCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => EducationAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => EducationMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => EducationMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => EducationSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const EducationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.EducationOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.EducationOrderByWithAggregationInput>;
export const EducationOrderByWithAggregationInputObjectZodSchema = makeSchema();
