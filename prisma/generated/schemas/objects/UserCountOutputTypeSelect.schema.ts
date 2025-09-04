import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  companies: z.boolean().optional(),
  resumes: z.boolean().optional(),
  JobApplication: z.boolean().optional(),
  previousCareers: z.boolean().optional(),
  education: z.boolean().optional(),
  skills: z.boolean().optional(),
  languages: z.boolean().optional(),
  accounts: z.boolean().optional(),
  sessions: z.boolean().optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
