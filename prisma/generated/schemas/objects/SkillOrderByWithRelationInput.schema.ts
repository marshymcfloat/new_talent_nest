import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  users: z.lazy(() => UserOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const SkillOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SkillOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SkillOrderByWithRelationInput>;
export const SkillOrderByWithRelationInputObjectZodSchema = makeSchema();
