import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { JobApplicationFindManySchema } from '../findManyJobApplication.schema';
import { ResumeCountOutputTypeArgsObjectSchema } from './ResumeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  User: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  JobApplications: z.union([z.boolean(), z.lazy(() => JobApplicationFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ResumeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ResumeIncludeObjectSchema: z.ZodType<Prisma.ResumeInclude> = makeSchema() as unknown as z.ZodType<Prisma.ResumeInclude>;
export const ResumeIncludeObjectZodSchema = makeSchema();
