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
  dateStarted: SortOrderSchema.optional(),
  dateEnded: SortOrderSchema.optional(),
  highlight: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const EducationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.EducationOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.EducationOrderByWithRelationInput>;
export const EducationOrderByWithRelationInputObjectZodSchema = makeSchema();
