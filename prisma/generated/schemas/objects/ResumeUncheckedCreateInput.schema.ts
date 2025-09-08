import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationUncheckedCreateNestedManyWithoutResumeInputObjectSchema } from './JobApplicationUncheckedCreateNestedManyWithoutResumeInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  url: z.string(),
  isPrimary: z.boolean(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  JobApplications: z.lazy(() => JobApplicationUncheckedCreateNestedManyWithoutResumeInputObjectSchema)
}).strict();
export const ResumeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ResumeUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeUncheckedCreateInput>;
export const ResumeUncheckedCreateInputObjectZodSchema = makeSchema();
