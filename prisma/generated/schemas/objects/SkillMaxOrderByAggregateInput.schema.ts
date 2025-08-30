import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional()
}).strict();
export const SkillMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SkillMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SkillMaxOrderByAggregateInput>;
export const SkillMaxOrderByAggregateInputObjectZodSchema = makeSchema();
