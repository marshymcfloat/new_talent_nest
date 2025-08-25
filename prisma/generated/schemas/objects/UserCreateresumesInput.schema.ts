import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  set: z.string().array()
}).strict();
export const UserCreateresumesInputObjectSchema: z.ZodType<Prisma.UserCreateresumesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateresumesInput>;
export const UserCreateresumesInputObjectZodSchema = makeSchema();
