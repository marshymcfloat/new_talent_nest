import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  course: SortOrderSchema.optional(),
  institution: SortOrderSchema.optional(),
  highlight: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isComplete: SortOrderSchema.optional(),
  finishedYear: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  expectedFinishMonth: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  expectedFinishYear: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const EducationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.EducationOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.EducationOrderByWithRelationInput>;
export const EducationOrderByWithRelationInputObjectZodSchema = makeSchema();
