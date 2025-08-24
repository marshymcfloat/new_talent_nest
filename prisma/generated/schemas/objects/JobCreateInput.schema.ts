import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobTypeSchema } from '../enums/JobType.schema';
import { JobClassSchema } from '../enums/JobClass.schema';
import { JobApplicationCreateNestedManyWithoutJobInputObjectSchema } from './JobApplicationCreateNestedManyWithoutJobInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  company: z.string(),
  title: z.string(),
  location: z.string(),
  type: JobTypeSchema,
  salary: z.string(),
  JobClass: JobClassSchema,
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  JobApplication: z.lazy(() => JobApplicationCreateNestedManyWithoutJobInputObjectSchema).optional()
}).strict();
export const JobCreateInputObjectSchema: z.ZodType<Prisma.JobCreateInput> = makeSchema();
export const JobCreateInputObjectZodSchema = makeSchema();
