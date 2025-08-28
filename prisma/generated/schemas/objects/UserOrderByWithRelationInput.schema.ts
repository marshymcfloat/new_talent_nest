import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ResumeOrderByRelationAggregateInputObjectSchema } from './ResumeOrderByRelationAggregateInput.schema';
import { JobApplicationOrderByRelationAggregateInputObjectSchema } from './JobApplicationOrderByRelationAggregateInput.schema';
import { AccountOrderByRelationAggregateInputObjectSchema } from './AccountOrderByRelationAggregateInput.schema';
import { SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  emailVerified: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  image: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  username: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  password: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  resumes: z.lazy(() => ResumeOrderByRelationAggregateInputObjectSchema).optional(),
  JobApplication: z.lazy(() => JobApplicationOrderByRelationAggregateInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountOrderByRelationAggregateInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectZodSchema = makeSchema();
