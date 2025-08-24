import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string(),
  sessionToken: z.string()
}).strict();
export const SessionWhereUniqueInputObjectSchema: z.ZodType<Prisma.SessionWhereUniqueInput> = makeSchema();
export const SessionWhereUniqueInputObjectZodSchema = makeSchema();
