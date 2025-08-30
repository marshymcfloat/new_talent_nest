import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const UserUpdatepreferredLocationInputObjectSchema: z.ZodType<Prisma.UserUpdatepreferredLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdatepreferredLocationInput>;
export const UserUpdatepreferredLocationInputObjectZodSchema = makeSchema();
