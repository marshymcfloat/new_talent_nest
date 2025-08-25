import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const UserUpdateresumesInputObjectSchema: z.ZodType<Prisma.UserUpdateresumesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateresumesInput>;
export const UserUpdateresumesInputObjectZodSchema = makeSchema();
