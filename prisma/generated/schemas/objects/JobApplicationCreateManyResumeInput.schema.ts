import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  userId: z.string(),
  jobId: z.string()
}).strict();
export const JobApplicationCreateManyResumeInputObjectSchema: z.ZodType<Prisma.JobApplicationCreateManyResumeInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationCreateManyResumeInput>;
export const JobApplicationCreateManyResumeInputObjectZodSchema = makeSchema();
