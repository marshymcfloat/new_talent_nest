import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  set: z.string().array()
}).strict();
export const JobCreatetagsInputObjectSchema: z.ZodType<Prisma.JobCreatetagsInput> = makeSchema() as unknown as z.ZodType<Prisma.JobCreatetagsInput>;
export const JobCreatetagsInputObjectZodSchema = makeSchema();
