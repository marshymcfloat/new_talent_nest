import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ApplicationStatusSchema } from '../enums/ApplicationStatus.schema';
import { ResumeCreateNestedOneWithoutJobApplicationsInputObjectSchema } from './ResumeCreateNestedOneWithoutJobApplicationsInput.schema';
import { JobCreateNestedOneWithoutJobApplicationInputObjectSchema } from './JobCreateNestedOneWithoutJobApplicationInput.schema';
import { AnswerCreateNestedManyWithoutJobApplicationInputObjectSchema } from './AnswerCreateNestedManyWithoutJobApplicationInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  status: ApplicationStatusSchema.optional(),
  notes: z.string().nullish(),
  isArchived: z.boolean().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  resume: z.lazy(() => ResumeCreateNestedOneWithoutJobApplicationsInputObjectSchema),
  Job: z.lazy(() => JobCreateNestedOneWithoutJobApplicationInputObjectSchema),
  answers: z.lazy(() => AnswerCreateNestedManyWithoutJobApplicationInputObjectSchema).optional()
}).strict();
export const JobApplicationCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.JobApplicationCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationCreateWithoutUserInput>;
export const JobApplicationCreateWithoutUserInputObjectZodSchema = makeSchema();
