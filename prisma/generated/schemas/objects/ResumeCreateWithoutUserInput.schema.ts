import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationCreateNestedManyWithoutResumeInputObjectSchema } from './JobApplicationCreateNestedManyWithoutResumeInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  Title: z.string(),
  url: z.string(),
  isPrimary: z.boolean(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  JobApplications: z.lazy(() => JobApplicationCreateNestedManyWithoutResumeInputObjectSchema).optional()
}).strict();
export const ResumeCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ResumeCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeCreateWithoutUserInput>;
export const ResumeCreateWithoutUserInputObjectZodSchema = makeSchema();
