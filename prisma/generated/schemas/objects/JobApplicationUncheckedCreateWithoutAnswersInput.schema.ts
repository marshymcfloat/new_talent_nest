import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  userId: z.string(),
  jobId: z.string(),
  resumeId: z.string()
}).strict();
export const JobApplicationUncheckedCreateWithoutAnswersInputObjectSchema: z.ZodType<Prisma.JobApplicationUncheckedCreateWithoutAnswersInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUncheckedCreateWithoutAnswersInput>;
export const JobApplicationUncheckedCreateWithoutAnswersInputObjectZodSchema = makeSchema();
