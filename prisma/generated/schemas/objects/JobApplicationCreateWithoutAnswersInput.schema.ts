import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResumeCreateNestedOneWithoutJobApplicationsInputObjectSchema } from './ResumeCreateNestedOneWithoutJobApplicationsInput.schema';
import { JobCreateNestedOneWithoutJobApplicationInputObjectSchema } from './JobCreateNestedOneWithoutJobApplicationInput.schema';
import { UserCreateNestedOneWithoutJobApplicationInputObjectSchema } from './UserCreateNestedOneWithoutJobApplicationInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  resume: z.lazy(() => ResumeCreateNestedOneWithoutJobApplicationsInputObjectSchema),
  Job: z.lazy(() => JobCreateNestedOneWithoutJobApplicationInputObjectSchema),
  User: z.lazy(() => UserCreateNestedOneWithoutJobApplicationInputObjectSchema)
}).strict();
export const JobApplicationCreateWithoutAnswersInputObjectSchema: z.ZodType<Prisma.JobApplicationCreateWithoutAnswersInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationCreateWithoutAnswersInput>;
export const JobApplicationCreateWithoutAnswersInputObjectZodSchema = makeSchema();
