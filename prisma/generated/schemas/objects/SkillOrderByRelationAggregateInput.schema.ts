import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const SkillOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.SkillOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SkillOrderByRelationAggregateInput>;
export const SkillOrderByRelationAggregateInputObjectZodSchema = makeSchema();
