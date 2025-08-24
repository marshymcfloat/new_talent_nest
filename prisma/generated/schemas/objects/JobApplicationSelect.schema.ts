import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobArgsObjectSchema } from './JobArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  jobId: z.boolean().optional(),
  Job: z.union([z.boolean(), z.lazy(() => JobArgsObjectSchema)]).optional(),
  User: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const JobApplicationSelectObjectSchema: z.ZodType<Prisma.JobApplicationSelect> = makeSchema();
export const JobApplicationSelectObjectZodSchema = makeSchema();
