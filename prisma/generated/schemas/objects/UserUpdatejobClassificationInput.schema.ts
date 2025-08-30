import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobClassSchema } from '../enums/JobClass.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  set: JobClassSchema.array().optional(),
  push: z.union([JobClassSchema, JobClassSchema.array()]).optional()
}).strict();
export const UserUpdatejobClassificationInputObjectSchema: z.ZodType<Prisma.UserUpdatejobClassificationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdatejobClassificationInput>;
export const UserUpdatejobClassificationInputObjectZodSchema = makeSchema();
