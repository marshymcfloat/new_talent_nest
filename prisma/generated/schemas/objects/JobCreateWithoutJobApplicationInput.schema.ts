import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobTypeSchema } from '../enums/JobType.schema';
import { JobClassSchema } from '../enums/JobClass.schema';
import { JobCreateemployerQuestionsInputObjectSchema } from './JobCreateemployerQuestionsInput.schema';
import { JobCreatetagsInputObjectSchema } from './JobCreatetagsInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  company: z.string(),
  title: z.string(),
  location: z.string(),
  type: JobTypeSchema,
  salary: z.string(),
  jobClass: JobClassSchema,
  summary: z.string().optional(),
  qualifications: z.string().optional(),
  responsibilities: z.string().optional(),
  benefits: z.string().nullish(),
  employerQuestions: z.union([z.lazy(() => JobCreateemployerQuestionsInputObjectSchema), z.string().array()]).optional(),
  tags: z.union([z.lazy(() => JobCreatetagsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
}).strict();
export const JobCreateWithoutJobApplicationInputObjectSchema: z.ZodType<Prisma.JobCreateWithoutJobApplicationInput> = makeSchema() as unknown as z.ZodType<Prisma.JobCreateWithoutJobApplicationInput>;
export const JobCreateWithoutJobApplicationInputObjectZodSchema = makeSchema();
