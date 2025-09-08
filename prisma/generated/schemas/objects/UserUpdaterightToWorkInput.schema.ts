import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const UserUpdaterightToWorkInputObjectSchema: z.ZodType<Prisma.UserUpdaterightToWorkInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdaterightToWorkInput>;
export const UserUpdaterightToWorkInputObjectZodSchema = makeSchema();
