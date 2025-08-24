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
export const JobApplicationScalarWhereInputObjectSchema: z.ZodType<Prisma.JobApplicationScalarWhereInput> = makeSchema();
export const JobApplicationScalarWhereInputObjectZodSchema = makeSchema();
// Sanity-check the output type WITHOUT changing the variable’s type:
type JobApplicationScalarWhereInput = {
  AND?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[];
  OR?: JobApplicationScalarWhereInput[];
  NOT?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[];
  id?: z.infer<typeof StringFilterObjectSchema> | string;
  userId?: z.infer<typeof StringFilterObjectSchema> | string;
  jobId?: z.infer<typeof StringFilterObjectSchema> | string;
};
(JobApplicationScalarWhereInputObjectZodSchema satisfies z.ZodType<JobApplicationScalarWhereInput>);
