import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationWhereInputObjectSchema } from './JobApplicationWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => JobApplicationWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => JobApplicationWhereInputObjectSchema).optional()
}).strict();
export const JobApplicationScalarRelationFilterObjectSchema: z.ZodType<Prisma.JobApplicationScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationScalarRelationFilter>;
export const JobApplicationScalarRelationFilterObjectZodSchema = makeSchema();
