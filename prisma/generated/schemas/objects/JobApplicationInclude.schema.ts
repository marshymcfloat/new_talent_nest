import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobArgsObjectSchema } from './JobArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  Job: z.union([z.boolean(), z.lazy(() => JobArgsObjectSchema)]).optional(),
  User: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const JobApplicationIncludeObjectSchema: z.ZodType<Prisma.JobApplicationInclude> = makeSchema();
export const JobApplicationIncludeObjectZodSchema = makeSchema();
