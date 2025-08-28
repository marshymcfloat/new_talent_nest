import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResumeArgsObjectSchema } from './ResumeArgs.schema';
import { JobArgsObjectSchema } from './JobArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { AnswerFindManySchema } from '../findManyAnswer.schema';
import { JobApplicationCountOutputTypeArgsObjectSchema } from './JobApplicationCountOutputTypeArgs.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  resume: z.union([z.boolean(), z.lazy(() => ResumeArgsObjectSchema)]).optional(),
  Job: z.union([z.boolean(), z.lazy(() => JobArgsObjectSchema)]).optional(),
  User: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  answers: z.union([z.boolean(), z.lazy(() => AnswerFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => JobApplicationCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const JobApplicationIncludeObjectSchema: z.ZodType<Prisma.JobApplicationInclude> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationInclude>;
export const JobApplicationIncludeObjectZodSchema = makeSchema();
