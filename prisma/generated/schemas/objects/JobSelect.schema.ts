import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyArgsObjectSchema } from './CompanyArgs.schema';
import { EmployerQuestionFindManySchema } from '../findManyEmployerQuestion.schema';
import { JobApplicationFindManySchema } from '../findManyJobApplication.schema';
import { JobCountOutputTypeArgsObjectSchema } from './JobCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  companyId: z.boolean().optional(),
  company: z.union([z.boolean(), z.lazy(() => CompanyArgsObjectSchema)]).optional(),
  title: z.boolean().optional(),
  location: z.boolean().optional(),
  type: z.boolean().optional(),
  minSalary: z.boolean().optional(),
  maxSalary: z.boolean().optional(),
  currency: z.boolean().optional(),
  payPeriod: z.boolean().optional(),
  jobClass: z.boolean().optional(),
  status: z.boolean().optional(),
  summary: z.boolean().optional(),
  qualifications: z.boolean().optional(),
  responsibilities: z.boolean().optional(),
  benefits: z.boolean().optional(),
  employerQuestions: z.union([z.boolean(), z.lazy(() => EmployerQuestionFindManySchema)]).optional(),
  tags: z.boolean().optional(),
  JobApplication: z.union([z.boolean(), z.lazy(() => JobApplicationFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => JobCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const JobSelectObjectSchema: z.ZodType<Prisma.JobSelect> = makeSchema() as unknown as z.ZodType<Prisma.JobSelect>;
export const JobSelectObjectZodSchema = makeSchema();
