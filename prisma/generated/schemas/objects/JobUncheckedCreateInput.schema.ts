import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobTypeSchema } from '../enums/JobType.schema';
import { JobClassSchema } from '../enums/JobClass.schema';
import { JobApplicationUncheckedCreateNestedManyWithoutJobInputObjectSchema } from './JobApplicationUncheckedCreateNestedManyWithoutJobInput.schema'

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
  JobApplication: z.lazy(() => JobApplicationUncheckedCreateNestedManyWithoutJobInputObjectSchema).optional()
}).strict();
export const JobUncheckedCreateInputObjectSchema: z.ZodType<Prisma.JobUncheckedCreateInput> = makeSchema();
export const JobUncheckedCreateInputObjectZodSchema = makeSchema();
