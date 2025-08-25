import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { JobScalarRelationFilterObjectSchema } from './JobScalarRelationFilter.schema';
import { JobWhereInputObjectSchema } from './JobWhereInput.schema';
import { UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  AND: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  OR: z.lazy(makeSchema).array().optional(),
  NOT: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  jobId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  Job: z.union([z.lazy(() => JobScalarRelationFilterObjectSchema), z.lazy(() => JobWhereInputObjectSchema)]).optional(),
  User: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const JobApplicationWhereInputObjectSchema: z.ZodType<Prisma.JobApplicationWhereInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationWhereInput>;
export const JobApplicationWhereInputObjectZodSchema = makeSchema();
