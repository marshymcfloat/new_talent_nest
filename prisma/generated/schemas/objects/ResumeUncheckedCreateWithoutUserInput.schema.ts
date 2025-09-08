import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationUncheckedCreateNestedManyWithoutResumeInputObjectSchema } from './JobApplicationUncheckedCreateNestedManyWithoutResumeInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  url: z.string(),
  isPrimary: z.boolean(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  JobApplications: z.lazy(() => JobApplicationUncheckedCreateNestedManyWithoutResumeInputObjectSchema).optional()
}).strict();
export const ResumeUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ResumeUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeUncheckedCreateWithoutUserInput>;
export const ResumeUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
