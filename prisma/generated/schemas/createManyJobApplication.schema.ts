import { z } from 'zod';
import { JobApplicationCreateManyInputObjectSchema } from './objects/JobApplicationCreateManyInput.schema';

export const JobApplicationCreateManySchema = z.object({ data: z.union([ JobApplicationCreateManyInputObjectSchema, z.array(JobApplicationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })