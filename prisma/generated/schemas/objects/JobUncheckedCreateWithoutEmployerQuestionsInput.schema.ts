import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobTypeSchema } from '../enums/JobType.schema';
import { JobClassSchema } from '../enums/JobClass.schema';
import { JobCreatetagsInputObjectSchema } from './JobCreatetagsInput.schema';
import { JobApplicationUncheckedCreateNestedManyWithoutJobInputObjectSchema } from './JobApplicationUncheckedCreateNestedManyWithoutJobInput.schema'

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
  tags: z.union([z.lazy(() => JobCreatetagsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  JobApplication: z.lazy(() => JobApplicationUncheckedCreateNestedManyWithoutJobInputObjectSchema).optional()
}).strict();
export const JobUncheckedCreateWithoutEmployerQuestionsInputObjectSchema: z.ZodType<Prisma.JobUncheckedCreateWithoutEmployerQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.JobUncheckedCreateWithoutEmployerQuestionsInput>;
export const JobUncheckedCreateWithoutEmployerQuestionsInputObjectZodSchema = makeSchema();
