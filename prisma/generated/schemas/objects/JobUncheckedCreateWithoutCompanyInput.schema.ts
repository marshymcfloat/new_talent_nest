import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobTypeSchema } from '../enums/JobType.schema';
import { SalaryPeriodSchema } from '../enums/SalaryPeriod.schema';
import { JobClassSchema } from '../enums/JobClass.schema';
import { JobStatusSchema } from '../enums/JobStatus.schema';
import { JobCreatetagsInputObjectSchema } from './JobCreatetagsInput.schema';
import { QuestionsOnJobsUncheckedCreateNestedManyWithoutJobInputObjectSchema } from './QuestionsOnJobsUncheckedCreateNestedManyWithoutJobInput.schema';
import { JobApplicationUncheckedCreateNestedManyWithoutJobInputObjectSchema } from './JobApplicationUncheckedCreateNestedManyWithoutJobInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  location: z.string(),
  type: JobTypeSchema,
  minSalary: z.number().int().optional().nullable(),
  maxSalary: z.number().int().optional().nullable(),
  currency: z.string().optional(),
  payPeriod: SalaryPeriodSchema.optional().nullable(),
  jobClass: JobClassSchema,
  status: JobStatusSchema.optional(),
  summary: z.string().optional(),
  qualifications: z.string().optional(),
  responsibilities: z.string().optional(),
  benefits: z.string().optional().nullable(),
  tags: z.union([z.lazy(() => JobCreatetagsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  questions: z.lazy(() => QuestionsOnJobsUncheckedCreateNestedManyWithoutJobInputObjectSchema).optional(),
  JobApplication: z.lazy(() => JobApplicationUncheckedCreateNestedManyWithoutJobInputObjectSchema).optional()
}).strict();
export const JobUncheckedCreateWithoutCompanyInputObjectSchema: z.ZodType<Prisma.JobUncheckedCreateWithoutCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.JobUncheckedCreateWithoutCompanyInput>;
export const JobUncheckedCreateWithoutCompanyInputObjectZodSchema = makeSchema();
