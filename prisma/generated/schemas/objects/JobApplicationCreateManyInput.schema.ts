import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  userId: z.string(),
  jobId: z.string()
}).strict();
export const JobApplicationCreateManyInputObjectSchema: z.ZodType<Prisma.JobApplicationCreateManyInput> = makeSchema();
export const JobApplicationCreateManyInputObjectZodSchema = makeSchema();
