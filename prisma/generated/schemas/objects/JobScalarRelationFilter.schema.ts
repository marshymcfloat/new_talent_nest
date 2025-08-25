import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobWhereInputObjectSchema } from './JobWhereInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  is: z.lazy(() => JobWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => JobWhereInputObjectSchema).optional()
}).strict();
export const JobScalarRelationFilterObjectSchema: z.ZodType<Prisma.JobScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.JobScalarRelationFilter>;
export const JobScalarRelationFilterObjectZodSchema = makeSchema();
