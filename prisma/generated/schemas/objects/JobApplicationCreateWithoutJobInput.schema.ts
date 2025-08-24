import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutJobApplicationInputObjectSchema } from './UserCreateNestedOneWithoutJobApplicationInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutJobApplicationInputObjectSchema)
}).strict();
export const JobApplicationCreateWithoutJobInputObjectSchema: z.ZodType<Prisma.JobApplicationCreateWithoutJobInput> = makeSchema();
export const JobApplicationCreateWithoutJobInputObjectZodSchema = makeSchema();
