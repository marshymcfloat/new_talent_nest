import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobCreateNestedOneWithoutJobApplicationInputObjectSchema } from './JobCreateNestedOneWithoutJobApplicationInput.schema';
import { UserCreateNestedOneWithoutJobApplicationInputObjectSchema } from './UserCreateNestedOneWithoutJobApplicationInput.schema';
import { AnswerCreateNestedManyWithoutJobApplicationInputObjectSchema } from './AnswerCreateNestedManyWithoutJobApplicationInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  Job: z.lazy(() => JobCreateNestedOneWithoutJobApplicationInputObjectSchema),
  User: z.lazy(() => UserCreateNestedOneWithoutJobApplicationInputObjectSchema),
  answers: z.lazy(() => AnswerCreateNestedManyWithoutJobApplicationInputObjectSchema).optional()
}).strict();
export const JobApplicationCreateWithoutResumeInputObjectSchema: z.ZodType<Prisma.JobApplicationCreateWithoutResumeInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationCreateWithoutResumeInput>;
export const JobApplicationCreateWithoutResumeInputObjectZodSchema = makeSchema();
