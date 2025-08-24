import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string(),
  email: z.string(),
  username: z.string()
}).strict();
export const UserWhereUniqueInputObjectSchema: z.ZodType<Prisma.UserWhereUniqueInput> = makeSchema();
export const UserWhereUniqueInputObjectZodSchema = makeSchema();
