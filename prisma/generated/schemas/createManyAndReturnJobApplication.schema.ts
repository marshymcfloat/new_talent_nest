import { z } from 'zod';
import { JobApplicationSelectObjectSchema } from './objects/JobApplicationSelect.schema';
import { JobApplicationCreateManyInputObjectSchema } from './objects/JobApplicationCreateManyInput.schema';

export const JobApplicationCreateManyAndReturnSchema = z.object({ select: JobApplicationSelectObjectSchema.optional(), data: z.union([ JobApplicationCreateManyInputObjectSchema, z.array(JobApplicationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict()