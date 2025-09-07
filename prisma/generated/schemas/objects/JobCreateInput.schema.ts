import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobTypeSchema } from '../enums/JobType.schema';
import { JobClassSchema } from '../enums/JobClass.schema';
import { JobStatusSchema } from '../enums/JobStatus.schema';
import { JobCreatetagsInputObjectSchema } from './JobCreatetagsInput.schema';
import { CompanyCreateNestedOneWithoutJobsInputObjectSchema } from './CompanyCreateNestedOneWithoutJobsInput.schema';
import { EmployerQuestionCreateNestedManyWithoutJobInputObjectSchema } from './EmployerQuestionCreateNestedManyWithoutJobInput.schema';
import { JobApplicationCreateNestedManyWithoutJobInputObjectSchema } from './JobApplicationCreateNestedManyWithoutJobInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  title: z.string(),
  location: z.string(),
  type: JobTypeSchema,
  salary: z.string(),
  jobClass: JobClassSchema,
  status: JobStatusSchema.optional(),
  summary: z.string().optional(),
  qualifications: z.string().optional(),
  responsibilities: z.string().optional(),
  benefits: z.string().nullish(),
  tags: z.union([z.lazy(() => JobCreatetagsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutJobsInputObjectSchema),
  employerQuestions: z.lazy(() => EmployerQuestionCreateNestedManyWithoutJobInputObjectSchema).optional(),
  JobApplication: z.lazy(() => JobApplicationCreateNestedManyWithoutJobInputObjectSchema).optional()
}).strict();
export const JobCreateInputObjectSchema: z.ZodType<Prisma.JobCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.JobCreateInput>;
export const JobCreateInputObjectZodSchema = makeSchema();
