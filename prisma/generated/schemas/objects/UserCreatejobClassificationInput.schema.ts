import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobClassSchema } from '../enums/JobClass.schema'

const makeSchema = () => z.object({
  set: JobClassSchema.array()
}).strict();
export const UserCreatejobClassificationInputObjectSchema: z.ZodType<Prisma.UserCreatejobClassificationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreatejobClassificationInput>;
export const UserCreatejobClassificationInputObjectZodSchema = makeSchema();
