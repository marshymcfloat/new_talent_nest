import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CompanyOrderByWithRelationInputObjectSchema } from './CompanyOrderByWithRelationInput.schema';
import { QuestionsOnJobsOrderByRelationAggregateInputObjectSchema } from './QuestionsOnJobsOrderByRelationAggregateInput.schema';
import { JobApplicationOrderByRelationAggregateInputObjectSchema } from './JobApplicationOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  companyId: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  location: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  minSalary: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  maxSalary: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  currency: SortOrderSchema.optional(),
  payPeriod: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  jobClass: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  summary: SortOrderSchema.optional(),
  qualifications: SortOrderSchema.optional(),
  responsibilities: SortOrderSchema.optional(),
  benefits: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tags: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  company: z.lazy(() => CompanyOrderByWithRelationInputObjectSchema).optional(),
  questions: z.lazy(() => QuestionsOnJobsOrderByRelationAggregateInputObjectSchema).optional(),
  JobApplication: z.lazy(() => JobApplicationOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const JobOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.JobOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.JobOrderByWithRelationInput>;
export const JobOrderByWithRelationInputObjectZodSchema = makeSchema();
