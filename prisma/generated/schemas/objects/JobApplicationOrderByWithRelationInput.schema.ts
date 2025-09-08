import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ResumeOrderByWithRelationInputObjectSchema } from './ResumeOrderByWithRelationInput.schema';
import { JobOrderByWithRelationInputObjectSchema } from './JobOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { AnswerOrderByRelationAggregateInputObjectSchema } from './AnswerOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  jobId: SortOrderSchema.optional(),
  resumeId: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isArchived: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  resume: z.lazy(() => ResumeOrderByWithRelationInputObjectSchema).optional(),
  Job: z.lazy(() => JobOrderByWithRelationInputObjectSchema).optional(),
  User: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  answers: z.lazy(() => AnswerOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const JobApplicationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.JobApplicationOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationOrderByWithRelationInput>;
export const JobApplicationOrderByWithRelationInputObjectZodSchema = makeSchema();
