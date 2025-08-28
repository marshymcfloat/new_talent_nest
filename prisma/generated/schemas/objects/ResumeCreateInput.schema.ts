import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutResumesInputObjectSchema } from './UserCreateNestedOneWithoutResumesInput.schema';
import { JobApplicationCreateNestedManyWithoutResumeInputObjectSchema } from './JobApplicationCreateNestedManyWithoutResumeInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  Title: z.string(),
  url: z.string(),
  isPrimary: z.boolean(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  User: z.lazy(() => UserCreateNestedOneWithoutResumesInputObjectSchema),
  JobApplications: z.lazy(() => JobApplicationCreateNestedManyWithoutResumeInputObjectSchema).optional()
}).strict();
export const ResumeCreateInputObjectSchema: z.ZodType<Prisma.ResumeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeCreateInput>;
export const ResumeCreateInputObjectZodSchema = makeSchema();
