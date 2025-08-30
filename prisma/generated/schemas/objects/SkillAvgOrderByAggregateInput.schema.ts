import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const SkillAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SkillAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SkillAvgOrderByAggregateInput>;
export const SkillAvgOrderByAggregateInputObjectZodSchema = makeSchema();
