import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { JobApplicationOrderByRelationAggregateInputObjectSchema } from './JobApplicationOrderByRelationAggregateInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  isPrimary: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  User: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  JobApplications: z.lazy(() => JobApplicationOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ResumeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ResumeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeOrderByWithRelationInput>;
export const ResumeOrderByWithRelationInputObjectZodSchema = makeSchema();
