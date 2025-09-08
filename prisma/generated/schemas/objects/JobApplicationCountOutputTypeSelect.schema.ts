import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  answers: z.boolean().optional()
}).strict();
export const JobApplicationCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.JobApplicationCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationCountOutputTypeSelect>;
export const JobApplicationCountOutputTypeSelectObjectZodSchema = makeSchema();
