import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const UserCreatepreferredLocationInputObjectSchema: z.ZodType<Prisma.UserCreatepreferredLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreatepreferredLocationInput>;
export const UserCreatepreferredLocationInputObjectZodSchema = makeSchema();
