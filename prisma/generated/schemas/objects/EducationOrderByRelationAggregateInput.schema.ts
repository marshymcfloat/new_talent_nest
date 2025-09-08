import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const EducationOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.EducationOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EducationOrderByRelationAggregateInput>;
export const EducationOrderByRelationAggregateInputObjectZodSchema = makeSchema();
