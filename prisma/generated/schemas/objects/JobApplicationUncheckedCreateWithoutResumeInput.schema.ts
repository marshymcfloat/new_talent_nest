import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ApplicationStatusSchema } from '../enums/ApplicationStatus.schema';
import { AnswerUncheckedCreateNestedManyWithoutJobApplicationInputObjectSchema } from './AnswerUncheckedCreateNestedManyWithoutJobApplicationInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  userId: z.string(),
  jobId: z.string(),
  status: ApplicationStatusSchema.optional(),
  notes: z.string().nullish(),
  isArchived: z.boolean().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  answers: z.lazy(() => AnswerUncheckedCreateNestedManyWithoutJobApplicationInputObjectSchema).optional()
}).strict();
export const JobApplicationUncheckedCreateWithoutResumeInputObjectSchema: z.ZodType<Prisma.JobApplicationUncheckedCreateWithoutResumeInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUncheckedCreateWithoutResumeInput>;
export const JobApplicationUncheckedCreateWithoutResumeInputObjectZodSchema = makeSchema();
