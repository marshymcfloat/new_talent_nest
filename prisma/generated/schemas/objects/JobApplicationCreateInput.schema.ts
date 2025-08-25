import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobCreateNestedOneWithoutJobApplicationInputObjectSchema } from './JobCreateNestedOneWithoutJobApplicationInput.schema';
import { UserCreateNestedOneWithoutJobApplicationInputObjectSchema } from './UserCreateNestedOneWithoutJobApplicationInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  Job: z.lazy(() => JobCreateNestedOneWithoutJobApplicationInputObjectSchema),
  User: z.lazy(() => UserCreateNestedOneWithoutJobApplicationInputObjectSchema)
}).strict();
export const JobApplicationCreateInputObjectSchema: z.ZodType<Prisma.JobApplicationCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationCreateInput>;
export const JobApplicationCreateInputObjectZodSchema = makeSchema();
