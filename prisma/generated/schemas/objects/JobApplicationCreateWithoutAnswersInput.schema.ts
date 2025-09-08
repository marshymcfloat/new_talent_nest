import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ApplicationStatusSchema } from '../enums/ApplicationStatus.schema';
import { ResumeCreateNestedOneWithoutJobApplicationsInputObjectSchema } from './ResumeCreateNestedOneWithoutJobApplicationsInput.schema';
import { JobCreateNestedOneWithoutJobApplicationInputObjectSchema } from './JobCreateNestedOneWithoutJobApplicationInput.schema';
import { UserCreateNestedOneWithoutJobApplicationInputObjectSchema } from './UserCreateNestedOneWithoutJobApplicationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  status: ApplicationStatusSchema.optional(),
  notes: z.string().optional().nullable(),
  isArchived: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  resume: z.lazy(() => ResumeCreateNestedOneWithoutJobApplicationsInputObjectSchema),
  Job: z.lazy(() => JobCreateNestedOneWithoutJobApplicationInputObjectSchema),
  User: z.lazy(() => UserCreateNestedOneWithoutJobApplicationInputObjectSchema)
}).strict();
export const JobApplicationCreateWithoutAnswersInputObjectSchema: z.ZodType<Prisma.JobApplicationCreateWithoutAnswersInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationCreateWithoutAnswersInput>;
export const JobApplicationCreateWithoutAnswersInputObjectZodSchema = makeSchema();
