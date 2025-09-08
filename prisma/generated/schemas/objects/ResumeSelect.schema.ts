import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { JobApplicationFindManySchema } from '../findManyJobApplication.schema';
import { ResumeCountOutputTypeArgsObjectSchema } from './ResumeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  url: z.boolean().optional(),
  isPrimary: z.boolean().optional(),
  userId: z.boolean().optional(),
  User: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  JobApplications: z.union([z.boolean(), z.lazy(() => JobApplicationFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => ResumeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ResumeSelectObjectSchema: z.ZodType<Prisma.ResumeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ResumeSelect>;
export const ResumeSelectObjectZodSchema = makeSchema();
