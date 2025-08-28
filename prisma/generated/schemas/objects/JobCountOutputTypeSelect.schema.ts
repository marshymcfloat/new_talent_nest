import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  employerQuestions: z.boolean().optional(),
  JobApplication: z.boolean().optional()
}).strict();
export const JobCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.JobCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.JobCountOutputTypeSelect>;
export const JobCountOutputTypeSelectObjectZodSchema = makeSchema();
