import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ApplicationStatusSchema } from '../enums/ApplicationStatus.schema';
import { AnswerUncheckedCreateNestedManyWithoutJobApplicationInputObjectSchema } from './AnswerUncheckedCreateNestedManyWithoutJobApplicationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  jobId: z.string(),
  resumeId: z.string(),
  status: ApplicationStatusSchema.optional(),
  notes: z.string().optional().nullable(),
  isArchived: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  answers: z.lazy(() => AnswerUncheckedCreateNestedManyWithoutJobApplicationInputObjectSchema)
}).strict();
export const JobApplicationUncheckedCreateInputObjectSchema: z.ZodType<Prisma.JobApplicationUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUncheckedCreateInput>;
export const JobApplicationUncheckedCreateInputObjectZodSchema = makeSchema();
