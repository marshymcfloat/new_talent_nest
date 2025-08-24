import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  identifier: z.boolean().optional(),
  token: z.boolean().optional(),
  expires: z.boolean().optional()
}).strict();
export const VerificationTokenSelectObjectSchema: z.ZodType<Prisma.VerificationTokenSelect> = makeSchema();
export const VerificationTokenSelectObjectZodSchema = makeSchema();
