import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  userId: z.string()
}).strict();
export const JobApplicationCreateManyJobInputObjectSchema: z.ZodType<Prisma.JobApplicationCreateManyJobInput> = makeSchema();
export const JobApplicationCreateManyJobInputObjectZodSchema = makeSchema();
