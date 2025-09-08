import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutResumesInputObjectSchema } from './UserCreateNestedOneWithoutResumesInput.schema';
import { JobApplicationCreateNestedManyWithoutResumeInputObjectSchema } from './JobApplicationCreateNestedManyWithoutResumeInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  url: z.string(),
  isPrimary: z.boolean(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  User: z.lazy(() => UserCreateNestedOneWithoutResumesInputObjectSchema),
  JobApplications: z.lazy(() => JobApplicationCreateNestedManyWithoutResumeInputObjectSchema)
}).strict();
export const ResumeCreateInputObjectSchema: z.ZodType<Prisma.ResumeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeCreateInput>;
export const ResumeCreateInputObjectZodSchema = makeSchema();
