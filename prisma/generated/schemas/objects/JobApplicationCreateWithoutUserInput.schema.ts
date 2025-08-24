import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobCreateNestedOneWithoutJobApplicationInputObjectSchema } from './JobCreateNestedOneWithoutJobApplicationInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  Job: z.lazy(() => JobCreateNestedOneWithoutJobApplicationInputObjectSchema)
}).strict();
export const JobApplicationCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.JobApplicationCreateWithoutUserInput> = makeSchema();
export const JobApplicationCreateWithoutUserInputObjectZodSchema = makeSchema();
