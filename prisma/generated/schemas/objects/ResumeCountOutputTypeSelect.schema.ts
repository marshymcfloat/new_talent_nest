import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  JobApplications: z.boolean().optional()
}).strict();
export const ResumeCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ResumeCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ResumeCountOutputTypeSelect>;
export const ResumeCountOutputTypeSelectObjectZodSchema = makeSchema();
