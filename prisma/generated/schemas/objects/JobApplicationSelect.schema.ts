import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResumeArgsObjectSchema } from './ResumeArgs.schema';
import { JobArgsObjectSchema } from './JobArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { AnswerFindManySchema } from '../findManyAnswer.schema';
import { JobApplicationCountOutputTypeArgsObjectSchema } from './JobApplicationCountOutputTypeArgs.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  jobId: z.boolean().optional(),
  resumeId: z.boolean().optional(),
  resume: z.union([z.boolean(), z.lazy(() => ResumeArgsObjectSchema)]).optional(),
  Job: z.union([z.boolean(), z.lazy(() => JobArgsObjectSchema)]).optional(),
  User: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  answers: z.union([z.boolean(), z.lazy(() => AnswerFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => JobApplicationCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const JobApplicationSelectObjectSchema: z.ZodType<Prisma.JobApplicationSelect> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationSelect>;
export const JobApplicationSelectObjectZodSchema = makeSchema();
