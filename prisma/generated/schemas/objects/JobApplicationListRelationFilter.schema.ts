import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationWhereInputObjectSchema } from './JobApplicationWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => JobApplicationWhereInputObjectSchema).optional(),
  some: z.lazy(() => JobApplicationWhereInputObjectSchema).optional(),
  none: z.lazy(() => JobApplicationWhereInputObjectSchema).optional()
}).strict();
export const JobApplicationListRelationFilterObjectSchema: z.ZodType<Prisma.JobApplicationListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationListRelationFilter>;
export const JobApplicationListRelationFilterObjectZodSchema = makeSchema();
