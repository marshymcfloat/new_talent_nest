import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  userId: z.string(),
  jobId: z.string()
}).strict();
export const JobApplicationUncheckedCreateInputObjectSchema: z.ZodType<Prisma.JobApplicationUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUncheckedCreateInput>;
export const JobApplicationUncheckedCreateInputObjectZodSchema = makeSchema();
