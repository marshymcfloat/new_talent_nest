import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  userId: z.string()
}).strict();
export const JobApplicationUncheckedCreateWithoutJobInputObjectSchema: z.ZodType<Prisma.JobApplicationUncheckedCreateWithoutJobInput> = makeSchema();
export const JobApplicationUncheckedCreateWithoutJobInputObjectZodSchema = makeSchema();
