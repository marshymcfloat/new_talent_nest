import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  course: SortOrderSchema.optional(),
  institution: SortOrderSchema.optional(),
  highlight: SortOrderSchema.optional(),
  isComplete: SortOrderSchema.optional(),
  finishedYear: SortOrderSchema.optional(),
  expectedFinishMonth: SortOrderSchema.optional(),
  expectedFinishYear: SortOrderSchema.optional(),
  deletedAt: SortOrderSchema.optional()
}).strict();
export const EducationCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EducationCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EducationCountOrderByAggregateInput>;
export const EducationCountOrderByAggregateInputObjectZodSchema = makeSchema();
