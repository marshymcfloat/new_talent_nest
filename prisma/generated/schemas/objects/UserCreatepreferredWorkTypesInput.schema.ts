import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobTypeSchema } from '../enums/JobType.schema'

const makeSchema = () => z.object({
  set: JobTypeSchema.array()
}).strict();
export const UserCreatepreferredWorkTypesInputObjectSchema: z.ZodType<Prisma.UserCreatepreferredWorkTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreatepreferredWorkTypesInput>;
export const UserCreatepreferredWorkTypesInputObjectZodSchema = makeSchema();
