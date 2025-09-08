import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const AnswerOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.AnswerOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AnswerOrderByRelationAggregateInput>;
export const AnswerOrderByRelationAggregateInputObjectZodSchema = makeSchema();
