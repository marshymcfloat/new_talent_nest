import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ApplicationStatusSchema } from '../enums/ApplicationStatus.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  userId: z.string(),
  resumeId: z.string(),
  status: ApplicationStatusSchema.optional(),
  notes: z.string().nullish(),
  isArchived: z.boolean().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
}).strict();
export const JobApplicationCreateManyJobInputObjectSchema: z.ZodType<Prisma.JobApplicationCreateManyJobInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationCreateManyJobInput>;
export const JobApplicationCreateManyJobInputObjectZodSchema = makeSchema();
