import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  AND: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  OR: z.lazy(makeSchema).array().optional(),
  NOT: z.union([z.lazy(makeSchema), z.lazy(makeSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  jobId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const JobApplicationScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.JobApplicationScalarWhereWithAggregatesInput> = makeSchema();
export const JobApplicationScalarWhereWithAggregatesInputObjectZodSchema = makeSchema();
// Sanity-check the output type WITHOUT changing the variable’s type:
type JobApplicationScalarWhereWithAggregatesInput = {
  AND?: JobApplicationScalarWhereWithAggregatesInput | JobApplicationScalarWhereWithAggregatesInput[];
  OR?: JobApplicationScalarWhereWithAggregatesInput[];
  NOT?: JobApplicationScalarWhereWithAggregatesInput | JobApplicationScalarWhereWithAggregatesInput[];
  id?: z.infer<typeof StringWithAggregatesFilterObjectSchema> | string;
  userId?: z.infer<typeof StringWithAggregatesFilterObjectSchema> | string;
  jobId?: z.infer<typeof StringWithAggregatesFilterObjectSchema> | string;
};
(JobApplicationScalarWhereWithAggregatesInputObjectZodSchema satisfies z.ZodType<JobApplicationScalarWhereWithAggregatesInput>);
