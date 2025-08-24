import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string()
}).strict();
export const JobApplicationWhereUniqueInputObjectSchema: z.ZodType<Prisma.JobApplicationWhereUniqueInput> = makeSchema();
export const JobApplicationWhereUniqueInputObjectZodSchema = makeSchema();
