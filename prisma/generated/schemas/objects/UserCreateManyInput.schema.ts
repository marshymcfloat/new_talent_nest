import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  emailVerified: z.date().nullish(),
  image: z.string().nullish(),
  username: z.string().nullish(),
  password: z.string().nullish()
}).strict();
export const UserCreateManyInputObjectSchema: z.ZodType<Prisma.UserCreateManyInput> = makeSchema();
export const UserCreateManyInputObjectZodSchema = makeSchema();
