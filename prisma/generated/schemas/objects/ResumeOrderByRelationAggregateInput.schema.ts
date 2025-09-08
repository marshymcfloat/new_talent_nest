import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ResumeOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ResumeOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeOrderByRelationAggregateInput>;
export const ResumeOrderByRelationAggregateInputObjectZodSchema = makeSchema();
