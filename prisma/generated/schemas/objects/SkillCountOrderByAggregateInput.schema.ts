import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional()
}).strict();
export const SkillCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SkillCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SkillCountOrderByAggregateInput>;
export const SkillCountOrderByAggregateInputObjectZodSchema = makeSchema();
