import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  jobId: z.string(),
  resumeId: z.string()
}).strict();
export const JobApplicationCreateManyUserInputObjectSchema: z.ZodType<Prisma.JobApplicationCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationCreateManyUserInput>;
export const JobApplicationCreateManyUserInputObjectZodSchema = makeSchema();
