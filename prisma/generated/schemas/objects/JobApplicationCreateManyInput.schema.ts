import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ApplicationStatusSchema } from '../enums/ApplicationStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  jobId: z.string(),
  resumeId: z.string(),
  status: ApplicationStatusSchema.optional(),
  notes: z.string().optional().nullable(),
  isArchived: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const JobApplicationCreateManyInputObjectSchema: z.ZodType<Prisma.JobApplicationCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationCreateManyInput>;
export const JobApplicationCreateManyInputObjectZodSchema = makeSchema();
