import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EducationCountOrderByAggregateInputObjectSchema } from './EducationCountOrderByAggregateInput.schema';
import { EducationMaxOrderByAggregateInputObjectSchema } from './EducationMaxOrderByAggregateInput.schema';
import { EducationMinOrderByAggregateInputObjectSchema } from './EducationMinOrderByAggregateInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  course: SortOrderSchema.optional(),
  institution: SortOrderSchema.optional(),
  dateStarted: SortOrderSchema.optional(),
  dateEnded: SortOrderSchema.optional(),
  highlight: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => EducationCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => EducationMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => EducationMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const EducationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.EducationOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.EducationOrderByWithAggregationInput>;
export const EducationOrderByWithAggregationInputObjectZodSchema = makeSchema();
