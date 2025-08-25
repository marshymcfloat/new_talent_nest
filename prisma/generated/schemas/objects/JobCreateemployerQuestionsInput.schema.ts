import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  set: z.string().array()
}).strict();
export const JobCreateemployerQuestionsInputObjectSchema: z.ZodType<Prisma.JobCreateemployerQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.JobCreateemployerQuestionsInput>;
export const JobCreateemployerQuestionsInputObjectZodSchema = makeSchema();
