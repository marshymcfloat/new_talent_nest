import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  JobApplication: z.boolean().optional(),
  accounts: z.boolean().optional(),
  sessions: z.boolean().optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema();
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
