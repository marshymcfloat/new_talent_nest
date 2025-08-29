import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  userId: z.string(),
  jobId: z.string(),
  resumeId: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
}).strict();
export const JobApplicationCreateManyInputObjectSchema: z.ZodType<Prisma.JobApplicationCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationCreateManyInput>;
export const JobApplicationCreateManyInputObjectZodSchema = makeSchema();
