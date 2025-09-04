import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobWhereInputObjectSchema } from './JobWhereInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  every: z.lazy(() => JobWhereInputObjectSchema).optional(),
  some: z.lazy(() => JobWhereInputObjectSchema).optional(),
  none: z.lazy(() => JobWhereInputObjectSchema).optional()
}).strict();
export const JobListRelationFilterObjectSchema: z.ZodType<Prisma.JobListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.JobListRelationFilter>;
export const JobListRelationFilterObjectZodSchema = makeSchema();
