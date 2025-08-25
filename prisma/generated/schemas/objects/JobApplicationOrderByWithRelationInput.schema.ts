import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { JobOrderByWithRelationInputObjectSchema } from './JobOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  jobId: SortOrderSchema.optional(),
  Job: z.lazy(() => JobOrderByWithRelationInputObjectSchema).optional(),
  User: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const JobApplicationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.JobApplicationOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationOrderByWithRelationInput>;
export const JobApplicationOrderByWithRelationInputObjectZodSchema = makeSchema();
