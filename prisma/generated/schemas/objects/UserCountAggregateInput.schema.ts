import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  email: z.literal(true).optional(),
  emailVerified: z.literal(true).optional(),
  image: z.literal(true).optional(),
  username: z.literal(true).optional(),
  password: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const UserCountAggregateInputObjectSchema: z.ZodType<Prisma.UserCountAggregateInputType> = makeSchema();
export const UserCountAggregateInputObjectZodSchema = makeSchema();
