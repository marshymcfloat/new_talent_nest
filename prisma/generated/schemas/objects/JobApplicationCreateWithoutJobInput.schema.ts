import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ApplicationStatusSchema } from '../enums/ApplicationStatus.schema';
import { ResumeCreateNestedOneWithoutJobApplicationsInputObjectSchema } from './ResumeCreateNestedOneWithoutJobApplicationsInput.schema';
import { UserCreateNestedOneWithoutJobApplicationInputObjectSchema } from './UserCreateNestedOneWithoutJobApplicationInput.schema';
import { AnswerCreateNestedManyWithoutJobApplicationInputObjectSchema } from './AnswerCreateNestedManyWithoutJobApplicationInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  status: ApplicationStatusSchema.optional(),
  notes: z.string().nullish(),
  isArchived: z.boolean().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  resume: z.lazy(() => ResumeCreateNestedOneWithoutJobApplicationsInputObjectSchema),
  User: z.lazy(() => UserCreateNestedOneWithoutJobApplicationInputObjectSchema),
  answers: z.lazy(() => AnswerCreateNestedManyWithoutJobApplicationInputObjectSchema).optional()
}).strict();
export const JobApplicationCreateWithoutJobInputObjectSchema: z.ZodType<Prisma.JobApplicationCreateWithoutJobInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationCreateWithoutJobInput>;
export const JobApplicationCreateWithoutJobInputObjectZodSchema = makeSchema();
