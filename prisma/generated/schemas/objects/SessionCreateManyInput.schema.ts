import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.date()
}).strict();
export const SessionCreateManyInputObjectSchema: z.ZodType<Prisma.SessionCreateManyInput> = makeSchema();
export const SessionCreateManyInputObjectZodSchema = makeSchema();
