import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationFindManySchema } from '../findManyJobApplication.schema';
import { JobCountOutputTypeArgsObjectSchema } from './JobCountOutputTypeArgs.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  JobApplication: z.union([z.boolean(), z.lazy(() => JobApplicationFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => JobCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const JobIncludeObjectSchema: z.ZodType<Prisma.JobInclude> = makeSchema() as unknown as z.ZodType<Prisma.JobInclude>;
export const JobIncludeObjectZodSchema = makeSchema();
