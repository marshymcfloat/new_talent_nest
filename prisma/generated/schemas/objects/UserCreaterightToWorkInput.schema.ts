import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  set: z.string().array()
}).strict();
export const UserCreaterightToWorkInputObjectSchema: z.ZodType<Prisma.UserCreaterightToWorkInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreaterightToWorkInput>;
export const UserCreaterightToWorkInputObjectZodSchema = makeSchema();
