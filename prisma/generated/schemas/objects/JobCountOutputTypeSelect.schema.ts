import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  JobApplication: z.boolean().optional()
}).strict();
export const JobCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.JobCountOutputTypeSelect> = makeSchema();
export const JobCountOutputTypeSelectObjectZodSchema = makeSchema();
