import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ResumeOrderByRelationAggregateInputObjectSchema } from './ResumeOrderByRelationAggregateInput.schema';
import { JobApplicationOrderByRelationAggregateInputObjectSchema } from './JobApplicationOrderByRelationAggregateInput.schema';
import { CareerHistoryOrderByRelationAggregateInputObjectSchema } from './CareerHistoryOrderByRelationAggregateInput.schema';
import { EducationOrderByRelationAggregateInputObjectSchema } from './EducationOrderByRelationAggregateInput.schema';
import { SkillOrderByRelationAggregateInputObjectSchema } from './SkillOrderByRelationAggregateInput.schema';
import { LanguageOrderByRelationAggregateInputObjectSchema } from './LanguageOrderByRelationAggregateInput.schema';
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
  summary: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  availability: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  preferredWorkType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  preferredLocation: SortOrderSchema.optional(),
  rightToWork: SortOrderSchema.optional(),
  expectedSalary: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  jobClassification: SortOrderSchema.optional(),
  resumes: z.lazy(() => ResumeOrderByRelationAggregateInputObjectSchema).optional(),
  JobApplication: z.lazy(() => JobApplicationOrderByRelationAggregateInputObjectSchema).optional(),
  previousCareers: z.lazy(() => CareerHistoryOrderByRelationAggregateInputObjectSchema).optional(),
  education: z.lazy(() => EducationOrderByRelationAggregateInputObjectSchema).optional(),
  skills: z.lazy(() => SkillOrderByRelationAggregateInputObjectSchema).optional(),
  languages: z.lazy(() => LanguageOrderByRelationAggregateInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountOrderByRelationAggregateInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectZodSchema = makeSchema();
