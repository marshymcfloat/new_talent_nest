import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  finishedYear: SortOrderSchema.optional(),
  expectedFinishMonth: SortOrderSchema.optional(),
  expectedFinishYear: SortOrderSchema.optional()
}).strict();
export const EducationAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EducationAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EducationAvgOrderByAggregateInput>;
export const EducationAvgOrderByAggregateInputObjectZodSchema = makeSchema();
