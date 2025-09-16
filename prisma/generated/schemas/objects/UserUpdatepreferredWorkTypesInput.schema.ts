import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobTypeSchema } from '../enums/JobType.schema'

const makeSchema = () => z.object({
  set: JobTypeSchema.array().optional(),
  push: z.union([JobTypeSchema, JobTypeSchema.array()]).optional()
}).strict();
export const UserUpdatepreferredWorkTypesInputObjectSchema: z.ZodType<Prisma.UserUpdatepreferredWorkTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdatepreferredWorkTypesInput>;
export const UserUpdatepreferredWorkTypesInputObjectZodSchema = makeSchema();
