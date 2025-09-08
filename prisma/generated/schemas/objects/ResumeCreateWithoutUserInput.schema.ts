import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationCreateNestedManyWithoutResumeInputObjectSchema } from './JobApplicationCreateNestedManyWithoutResumeInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  url: z.string(),
  isPrimary: z.boolean(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  JobApplications: z.lazy(() => JobApplicationCreateNestedManyWithoutResumeInputObjectSchema).optional()
}).strict();
export const ResumeCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ResumeCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeCreateWithoutUserInput>;
export const ResumeCreateWithoutUserInputObjectZodSchema = makeSchema();
