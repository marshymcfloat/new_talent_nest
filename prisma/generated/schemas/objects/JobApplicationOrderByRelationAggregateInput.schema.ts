import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const JobApplicationOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.JobApplicationOrderByRelationAggregateInput> = makeSchema();
export const JobApplicationOrderByRelationAggregateInputObjectZodSchema = makeSchema();
