import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationFindManySchema } from '../findManyJobApplication.schema';
import { JobCountOutputTypeArgsObjectSchema } from './JobCountOutputTypeArgs.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.boolean().optional(),
  company: z.boolean().optional(),
  title: z.boolean().optional(),
  location: z.boolean().optional(),
  type: z.boolean().optional(),
  salary: z.boolean().optional(),
  JobClass: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  JobApplication: z.union([z.boolean(), z.lazy(() => JobApplicationFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => JobCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const JobSelectObjectSchema: z.ZodType<Prisma.JobSelect> = makeSchema();
export const JobSelectObjectZodSchema = makeSchema();
