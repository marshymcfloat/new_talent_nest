import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  jobId: z.string()
}).strict();
export const JobApplicationUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.JobApplicationUncheckedCreateWithoutUserInput> = makeSchema();
export const JobApplicationUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
