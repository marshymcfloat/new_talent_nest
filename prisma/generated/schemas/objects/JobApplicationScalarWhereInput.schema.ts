import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  AND: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  OR: z.lazy(makeSchema).array().optional(),
  NOT: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  jobId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const JobApplicationScalarWhereInputObjectSchema: z.ZodType<Prisma.JobApplicationScalarWhereInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationScalarWhereInput>;
export const JobApplicationScalarWhereInputObjectZodSchema = makeSchema();
