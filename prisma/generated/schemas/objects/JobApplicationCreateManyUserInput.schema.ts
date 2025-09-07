import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ApplicationStatusSchema } from '../enums/ApplicationStatus.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  jobId: z.string(),
  resumeId: z.string(),
  status: ApplicationStatusSchema.optional(),
  notes: z.string().nullish(),
  isArchived: z.boolean().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
}).strict();
export const JobApplicationCreateManyUserInputObjectSchema: z.ZodType<Prisma.JobApplicationCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationCreateManyUserInput>;
export const JobApplicationCreateManyUserInputObjectZodSchema = makeSchema();
