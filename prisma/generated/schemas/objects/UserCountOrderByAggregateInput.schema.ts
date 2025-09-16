import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  emailVerified: SortOrderSchema.optional(),
  image: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  summary: SortOrderSchema.optional(),
  availability: SortOrderSchema.optional(),
  preferredWorkTypes: SortOrderSchema.optional(),
  preferredLocation: SortOrderSchema.optional(),
  rightToWork: SortOrderSchema.optional(),
  expectedSalary: SortOrderSchema.optional(),
  jobClassification: SortOrderSchema.optional(),
  approachability: SortOrderSchema.optional()
}).strict();
export const UserCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOrderByAggregateInput>;
export const UserCountOrderByAggregateInputObjectZodSchema = makeSchema();
